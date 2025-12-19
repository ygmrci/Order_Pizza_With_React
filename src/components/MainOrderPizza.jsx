import React from "react";
import { Form, FormGroup, Label, Input, FormFeedback } from "reactstrap";
import "../styles/MainOrderPizza.css";

const SIZES = [
  { label: "Küçük", value: "S" },
  { label: "Orta", value: "M" },
  { label: "Büyük", value: "L" },
];

const TOPPINGS = [
  "Pepperoni",
  "Sosis",
  "Kanada Jambonu",
  "Tavuk Izgara",
  "Soğan",
  "Domates",
  "Mısır",
  "Sucuk",
  "Jalapeno",
  "Sarımsak",
  "Biber",
  "Ananas",
  "Kabak",
  "Zeytin",
  "Mantar",
  "Peynir",
];

export default function MainOrderPizza({ form, setForm, errors }) {
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

  return (
    <div className="order-form">
      <div style={{ padding: 0 }}>
        <h2>Sipariş Formu</h2>

        
        <Form>
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

          <div className="size-dough-row">
            {/* BOYUT */}
            <div className="size-col">
              <Label className="field-title">Boyut Seç *</Label>

              <div className="size-options">
                {SIZES.map((s) => (
                  <Label key={s.value} className="size-pill">
                    <Input
                      className="size-input"
                      type="radio"
                      name="size"
                      value={s.value}
                      checked={form.size === s.value}
                      // ✅ FIX: her option'a unique data-cy
                      data-cy={`size-${s.value}`}
                      onChange={onChange}
                    />
                    <span className="size-pill-ui">{s.value}</span>
                  </Label>
                ))}
              </div>

              {errors.size && <div className="field-error">{errors.size}</div>}
            </div>

            {/* HAMUR */}
            <div className="dough-col">
              <Label className="field-title">Hamur Seç</Label>

              <Input
                type="select"
                name="dough"
                value={form.dough}
                onChange={onChange}
                invalid={Boolean(errors.dough)}
                className="dough-select"
                // ✅ Bonus: hamur select için stabil selector
                data-cy="dough-select"
              >
                <option value="">Hamur Kalınlığı</option>
                <option value="İnce">İnce</option>
                <option value="Orta">Orta</option>
                <option value="Kalın">Kalın</option>
              </Input>

              {errors.dough && (
                <FormFeedback className="field-error">
                  {errors.dough}
                </FormFeedback>
              )}
            </div>
          </div>

          {/* Malzemeler */}
          <FormGroup className="toppings-section">
            <Label className="field-title">Ek Malzemeler</Label>
            <div className="field-subtitle">
              En Fazla 10 malzeme seçebilirsiniz. 5₺
            </div>

            <div className="toppings-grid">
              {TOPPINGS.map((t, idx) => {
                const checked = form.toppings.includes(t);
                const shouldDisable = reachedLimit && !checked;

                return (
                  <Label
                    key={t}
                    className={`topping-item ${
                      shouldDisable ? "is-disabled" : ""
                    }`}
                  >
                    <Input
                      className="topping-input"
                      type="checkbox"
                      checked={checked}
                      disabled={shouldDisable}
                      onChange={() => onToggleTopping(t)}
                      // ✅ FIX: test için stabil selector (boşluk/özel karakter derdi yok)
                      data-cy={`topping-${idx}`}
                    />
                    <span className="topping-box" aria-hidden="true" />
                    <span className="topping-text">{t}</span>
                  </Label>
                );
              })}
            </div>

            {errors.toppings ? (
              <div className="field-error">{errors.toppings}</div>
            ) : null}
          </FormGroup>

          {/* Not */}
          <FormGroup>
            <Label for="note">Sipariş Notu</Label>
            <Input
              className="order-note"
              data-cy="note-input"
              id="note"
              name="note"
              type="textarea"
              value={form.note}
              onChange={onChange}
              placeholder="Siparişine eklemek istediğin bir not var mı?"
            />
          </FormGroup>
        </Form>
      </div>
    </div>
  );
}
