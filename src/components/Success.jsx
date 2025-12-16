import React from "react";
import { useHistory } from "react-router-dom";

export default function Success({ order }) {
  const history = useHistory();

  if (!order) {
    return (
      <div style={{ padding: 24 }}>
        <h2>Sipariş bulunamadı</h2>
        <button onClick={() => history.push("/")}>Ana sayfaya dön</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 24, maxWidth: 720, margin: "0 auto" }}>
      <h1 style={{ display: "flex", gap: 12, alignItems: "center" }}>
        Sipariş Alındı ✅
      </h1>

      <div style={{ border: "1px solid #ddd", borderRadius: 12, padding: 16 }}>
        <p>
          <b>Sipariş No:</b> {order.id}
        </p>
        <p>
          <b>İsim:</b> {order.isim}
        </p>
        <p>
          <b>Boyut:</b> {order.boyut}
        </p>
        <p>
          <b>Not:</b> {order.ozel || "-"}
        </p>
        <p>
          <b>Tarih:</b> {order.createdAt}
        </p>

        <div style={{ marginTop: 12 }}>
          <b>Malzemeler ({order.malzemeler?.length || 0})</b>
          <ul>
            {(order.malzemeler || []).map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{ marginTop: 16, display: "flex", gap: 12 }}>
        <button onClick={() => history.push("/order")}>Yeni Sipariş Ver</button>
        <button onClick={() => history.push("/")}>Ana Sayfa</button>
      </div>
    </div>
  );
}
