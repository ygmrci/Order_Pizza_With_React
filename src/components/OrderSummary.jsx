import React from "react";
// import "./OrderPizza.css";
import "./OrderSummary.css";

export default function OrderSummary({
  quantity,
  setQuantity,
  selectionsTotal,
  total,
  disabled,
  loading,
  onSubmit,
}) {
  const dec = () => setQuantity((q) => Math.max(1, q - 1));
  const inc = () => setQuantity((q) => q + 1);

  return (
    <div className="summary-area">
      {/* Sayaç */}
      <div className="qty-box">
        <button
          type="button"
          onClick={dec}
          className="qty-btn"
          data-cy="qty-dec"
        >
          -
        </button>

        <div className="qty-value" data-cy="qty-value">
          {quantity}
        </div>

        <button
          type="button"
          onClick={inc}
          className="qty-btn"
          data-cy="qty-inc"
        >
          +
        </button>
      </div>

      {/* Kart */}
      <div className="summary-card">
        <div className="summary-title">Sipariş Toplamı</div>

        <div className="summary-row">
          <span>Seçimler</span>
          <b>{selectionsTotal.toFixed(2)}₺</b>
        </div>

        <div className="summary-total">
          <b>Toplam</b>
          <b>{total.toFixed(2)}₺</b>
        </div>

        <button
          type="button"
          className="order-submit"
          data-cy="submit-button"
          disabled={disabled}
          onClick={onSubmit}
        >
          {loading ? "Gönderiliyor..." : "SİPARİŞ VER"}
        </button>
      </div>
    </div>
  );
}
