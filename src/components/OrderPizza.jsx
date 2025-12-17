import React, { useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./OrderPizza.css";
import MainOrderPizza from "../components/MainOrderPizza";
import OrderSummary from "../components/OrderSummary";
import HeaderOrderPizza from "./HeaderOrderPizza";

const BASE_PRICE = 85.5;
const TOPPING_PRICE = 5;

export default function OrderPizza({ setOrder }) {
  const history = useHistory();

  const [form, setForm] = useState({
    name: "",
    size: "",
    dough: "",
    toppings: [],
    note: "",
  });

  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  // errors + isValid
  const errors = useMemo(() => {
    const e = {};
    if (form.name.trim().length < 3) e.name = "İsim en az 3 karakter olmalı.";
    if (!form.size) e.size = "Boyut seçmelisin.";
    if (form.toppings.length < 4) e.toppings = "En az 4 malzeme seçmelisin.";
    if (form.toppings.length > 10)
      e.toppings = "En fazla 10 malzeme seçebilirsin.";
    // hamur zorunlu olsun istiyorsan aç:
    if (!form.dough) e.dough = "Hamur seçmelisin.";
    return e;
  }, [form]);

  const isValid = Object.keys(errors).length === 0;

  const selectionsTotal = form.toppings.length * TOPPING_PRICE;
  const unitTotal = BASE_PRICE + selectionsTotal;
  const total = unitTotal * quantity;

  const handleSubmit = async () => {
    if (!isValid || loading) return;

    setLoading(true);
    try {
      const res = await axios.post(
        "https://reqres.in/api/pizza",
        {
          isim: form.name,
          boyut: form.size,
          hamur: form.dough,
          malzemeler: form.toppings,
          ozel: form.note,
          adet: quantity,
          toplam: total,
        },
        { headers: { "x-api-key": "reqres-free-v1" } }
      );

      console.log("API response:", res.data);
      console.log("Order summary:", {
        isim: form.name,
        boyut: form.size,
        hamur: form.dough,
        malzemeler: form.toppings,
        adet: quantity,
        toplam: total,
      });

      setOrder(res.data);
      history.push("/success");
    } catch (e) {
      console.error(e);
      alert("İstek başarısız.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="order-page">
      <div className="order-topbar">
        <img
          src="/home/logo.png"
          alt="Teknolojik Yemekler"
          className="order-logo"
        />
      </div>

      <div className="order-container">
        <img
          className="order-hero-pizza"
          src="/home/home-banner.png"
          alt="Pizza"
        />

        {/* 1) breadcrumb */}
        <div className="order-breadcrumb">
          <span>Anasayfa - </span>
          <span>Seçenekler - </span>
          <span className="crumb-active">Sipariş Oluştur</span>
        </div>

        <hr className="divider" />

        {/* 2) product title (sola yaslı) */}
        <h2 className="product-title">Position Absolute Acı Pizza</h2>

        <hr className="divider" />

        {/* 3) meta: price + rating (yan yana) */}
        <div className="product-meta">
          <div className="product-price">{BASE_PRICE.toFixed(2)}₺</div>

          <div className="product-rating">
            <span className="rating-value">4.9</span>
            <span className="rating-count">(200)</span>
          </div>
        </div>

        <hr className="divider" />

        {/* 4) description */}
        <p className="product-desc">
          Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir... Küçük bir pizzaya bazen pizzetta denir.
        </p>

        {/* 5) form + summary */}
        <div className="order-grid">
          <div className="order-form">
            <MainOrderPizza form={form} setForm={setForm} errors={errors} />
          </div>

          <div className="form-footer">
            <OrderSummary
              quantity={quantity}
              setQuantity={setQuantity}
              selectionsTotal={selectionsTotal}
              total={total}
              disabled={!isValid || loading}
              loading={loading}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
