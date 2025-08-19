import React, { useEffect, useState } from "react";
import "./admin.css";
import jsPDF from "jspdf";
import "jspdf-autotable";

const Admin = () => {
  const [topUsers, setTopUsers] = useState([]);
  const [topItems, setTopItems] = useState([]);
  const [revenue, setRevenue] = useState(0);
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersRes = await fetch("http://localhost:4000/api/admin/top-users");
        const usersData = await usersRes.json();
        setTopUsers(usersData);

        const itemsRes = await fetch("http://localhost:4000/api/admin/top-items");
        const itemsData = await itemsRes.json();
        setTopItems(itemsData);

        const revenueRes = await fetch("http://localhost:4000/api/admin/revenue");
        const revenueData = await revenueRes.json();
        setRevenue(revenueData.revenue);
      } catch (error) {
        console.error("Error fetching admin data:", error);
      }
    };

    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 10000);

    return () => clearInterval(interval);

  }, []);

  const exportToPDF = () => {
    const doc = new jsPDF();

    doc.text("Admin Dashboard Report", 14, 10);

    doc.autoTable({
      startY: 20,
      head: [["User", "Orders", "Total Spent"]],
      body: topUsers.map(user => [user.name, user.totalOrders, `$ ${user.totalSpent}`]),
    });


    let finalY = doc.lastAutoTable.finalY + 10;


    doc.autoTable({
      startY: finalY,
      head: [["Item", "Quantity"]],
      body: topItems.map(item => [item._id, item.totalQuantity]),
    });

    finalY = doc.lastAutoTable.finalY + 10;

    doc.text(`Total Revenue: $ ${revenue}`, 14, finalY);

    doc.save("Admin_Report.pdf");
  }

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      <h2>📌 Top 5 Users</h2>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Orders</th>
            <th>Total Spent</th>
          </tr>
        </thead>
        <tbody>
          {topUsers.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.totalOrders}</td>
              <td>$ {user.totalSpent}</td>
            </tr>
          ))}
        </tbody>
      </table>


      <h2>📌 Most Ordered Items</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Orders</th>
          </tr>
        </thead>
        <tbody>
          {topItems.map((item, index) => (
            <tr key={index}>
              <td>{item._id}</td>
              <td>{item.totalQuantity}</td>
            </tr>
          ))}
        </tbody>
      </table>


      <h2>📌 Total Revenue</h2>
      <p>$ {revenue}</p>

      <button className="admin_btn" onClick={exportToPDF} style={{ marginBottom: "20px", padding: "8px 16px", cursor: "pointer" }}>
        📄 Export All Data to PDF
      </button>
    </div>
  );
};

export default Admin;
