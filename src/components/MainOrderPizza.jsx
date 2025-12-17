import React from "react";
import { Form, FormGroup, Label, Input, FormFeedback } from "reactstrap";
import "./MainOrderPizza.css";

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

        {/* BUTON YOK, SUBMIT YOK: Figma’da buton summary kartında */}
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
            {/* Boyut */}
            <FormGroup tag="fieldset" className="size-group">
              <Label className="field-title">Boyut Seç *</Label>

              <div className="size-options">
                {SIZES.map((s) => (
                  <Label key={s.value} className="size-pill">
                    <Input
                      data-cy={`size-${s.value}`}
                      className="size-input"
                      type="radio"
                      name="size"
                      value={s.value}
                      checked={form.size === s.value}
                      onChange={onChange}
                    />
                    <span className="size-pill-ui">{s.value}</span>
                  </Label>
                ))}
              </div>

              {errors.size ? (
                <div className="field-error">{errors.size}</div>
              ) : null}
            </FormGroup>

            {/* Hamur (istersen figma için) */}
            <FormGroup>
              <Label for="dough">Hamur Seç</Label>
              <Input
                id="dough"
                name="dough"
                type="select"
                value={form.dough}
                onChange={onChange}
                invalid={Boolean(errors.dough)}
              >
                <option value="">Hamur Kalınlığı</option>
                <option value="İnce">İnce</option>
                <option value="Orta">Orta</option>
                <option value="Kalın">Kalın</option>
              </Input>

              {errors.dough ? (
                <FormFeedback>{errors.dough}</FormFeedback>
              ) : null}
            </FormGroup>
          </div>
          {/* Malzemeler */}
          <FormGroup className="toppings-section">
            <Label className="field-title">Ek Malzemeler</Label>
            <div className="field-subtitle">
              En Fazla 10 malzeme seçebilirsiniz. 5₺
            </div>

            <div className="toppings-grid">
              {TOPPINGS.map((t) => {
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
                      data-cy={`topping-${t}`}
                      className="topping-input"
                      type="checkbox"
                      checked={checked}
                      disabled={shouldDisable}
                      onChange={() => onToggleTopping(t)}
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
