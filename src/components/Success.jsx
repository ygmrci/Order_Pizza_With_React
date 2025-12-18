import React from "react";
import { useHistory } from "react-router-dom";
import "./Success.css";

const TOPPING_PRICE = 5;

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

  const selectionsTotal = (order.malzemeler?.length || 0) * TOPPING_PRICE;

  const total =
    typeof order.toplam === "number" ? order.toplam : selectionsTotal;

  const toppingsText = (order.malzemeler || []).join(", ");

  return (
    <div className="success-page">
      <div className="success-top">
        <img src="/home/logo.png" />
      </div>

      <div className="success-content">
        <div className="success-subtitle">lezzetin yolda</div>
        <div className="success-title">SİPARİŞ ALINDI</div>

        <div className="success-line" />

        <div className="success-product">Position Absolute Acı Pizza</div>

        <div className="success-details">
          <div>
            Boyut: <b>{order.boyut}</b>
          </div>
          <div>
            Hamur: <b>{order.hamur}</b>
          </div>
          <div className="success-toppings">
            Ek Malzemeler: <b>{toppingsText || "-"}</b>
          </div>
        </div>

        <div className="success-summary">
          <div className="success-summary-title">Sipariş Toplamı</div>

          <div className="success-summary-row">
            <span>Seçimler</span>
            <b>{selectionsTotal.toFixed(2)}₺</b>
          </div>

          <div className="success-summary-row">
            <span>Toplam</span>
            <b>{total.toFixed(2)}₺</b>
          </div>
        </div>

        <div className="success-actions">
          <button onClick={() => history.push("/order")}>
            Yeni Sipariş Ver
          </button>
          <button onClick={() => history.push("/")}>Ana Sayfa</button>
        </div>
      </div>
    </div>
  );
}
