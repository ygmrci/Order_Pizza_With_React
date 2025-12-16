import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
} from "reactstrap";

const SIZES = ["S", "M", "L"];
const TOPPINGS = [
  "Pepperoni",
  "Sosis",
  "Mısır",
  "Zeytin",
  "Mantar",
  "Biber",
  "Soğan",
  "Ananas",
  "Sucuk",
  "Jalapeno",
  "Peynir",
];

export default function MainOrderPizza({ setOrder }) {
  const history = useHistory();

  const [form, setForm] = useState({
    name: "",
    size: "",
    toppings: [],
    note: "",
  });
  const [loading, setLoading] = useState(false);

  // ✅ useMemo yok: normal fonksiyonla her render’da hesaplıyoruz
  const errors = {};
  if (form.name.trim().length < 3)
    errors.name = "İsim en az 3 karakter olmalı.";
  if (!form.size) errors.size = "Boyut seçmelisin.";
  if (form.toppings.length < 4) errors.toppings = "En az 4 malzeme seçmelisin.";
  if (form.toppings.length > 10)
    errors.toppings = "En fazla 10 malzeme seçebilirsin.";

  const isValid = Object.keys(errors).length === 0;
  const reachedLimit = form.toppings.length >= 10;

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onToggleTopping = (topping) => {
    setForm((f) => {
      const has = f.toppings.includes(topping);
      const next = has
        ? f.toppings.filter((x) => x !== topping)
        : [...f.toppings, topping];
      return { ...f, toppings: next };
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;

    setLoading(true);

    try {
      const res = await axios.post(
        "https://reqres.in/api/pizza",
        {
          isim: form.name,
          boyut: form.size,
          malzemeler: form.toppings,
          ozel: form.note,
        },
        { headers: { "x-api-key": "reqres-free-v1" } }
      );

      console.log("API response:", res.data);
      setOrder(res.data);
      history.push("/success");
    } catch (err) {
      console.error("API error:", err);
      alert("İstek başarısız. İnternet bağlantını kontrol et.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 24, maxWidth: 520 }}>
      <h2>Sipariş Formu</h2>

      <Form onSubmit={onSubmit}>
        {/* İsim */}
        <FormGroup>
          <Label for="name">İsim Soyisim</Label>
          <Input
            data-cy="name-input"
            id="name"
            name="name"
            value={form.name}
            onChange={onChange}
            invalid={Boolean(errors.name)}
            placeholder="En az 3 karakter"
          />
          {errors.name ? <FormFeedback>{errors.name}</FormFeedback> : null}
        </FormGroup>

        {/* Boyut */}
        <FormGroup tag="fieldset">
          <legend style={{ fontSize: 16 }}>Boyut</legend>

          {SIZES.map((s) => (
            <FormGroup check key={s}>
              <Label check>
                <Input
                  data-cy={`size-${s}`}
                  type="radio"
                  name="size"
                  value={s}
                  checked={form.size === s}
                  onChange={onChange}
                />{" "}
                {s}
              </Label>
            </FormGroup>
          ))}

          {errors.size ? (
            <div style={{ color: "#dc3545", marginTop: 6 }}>{errors.size}</div>
          ) : null}
        </FormGroup>

        {/* Malzemeler */}
        <FormGroup>
          <Label>Malzemeler (4–10)</Label>

          {TOPPINGS.map((t) => {
            const checked = form.toppings.includes(t);
            const shouldDisable = reachedLimit && !checked;

            return (
              <FormGroup check key={t}>
                <Label check>
                  <Input
                    data-cy={`topping-${t}`}
                    type="checkbox"
                    checked={checked}
                    disabled={shouldDisable}
                    onChange={() => onToggleTopping(t)}
                  />{" "}
                  {t}
                </Label>
              </FormGroup>
            );
          })}

          {errors.toppings ? (
            <div style={{ color: "#dc3545", marginTop: 6 }}>
              {errors.toppings}
            </div>
          ) : null}
        </FormGroup>

        {/* Not */}
        <FormGroup>
          <Label for="note">Not</Label>
          <Input
            data-cy="note-input"
            id="note"
            name="note"
            type="textarea"
            value={form.note}
            onChange={onChange}
            placeholder="İstersen ek not yaz..."
          />
        </FormGroup>

        <Button
          data-cy="submit-button"
          color="danger"
          type="submit"
          disabled={!isValid || loading}
        >
          {loading ? "Gönderiliyor..." : "Sipariş Ver"}
        </Button>
      </Form>
    </div>
  );
}
