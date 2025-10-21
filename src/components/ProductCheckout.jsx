export const ProductCheckout = () => {
  return (
    <div className="bg-white w-[40rem] flex flex-col gap-8 rounded-3xl py-[2rem]! px-[3rem]!">
      <h3 className="text-3xl font-bold">Your Cart (7)</h3>

      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-[1.3rem] mb-2">Classic Tiramisu</p>

          <div className="flex items-center gap-3">
            <span className="text-[1.2rem] font-semibold text-[var(--color-red)]">
              1x
            </span>
            <span className="text-[1.2rem] font-semibold text-gray-600">
              @$5.50
            </span>
            <span className="text-[1.2rem] font-semibold text-gray-600">
              $5.50
            </span>
          </div>
        </div>

        <button className="rounded-full cursor-pointer p-[6px]! cancel-btn">
          <img
            src="../../assets/images/icon-remove-item.svg"
            alt="cancel icon"
          />
        </button>
      </div>

      <hr />

      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-[1.3rem] mb-2">
            Vanilla Bean Creme Brulee
          </p>

          <div className="flex items-center gap-3">
            <span className="text-[1.2rem] font-semibold text-[var(--color-red)]">
              4x
            </span>
            <span className="text-[1.2rem] font-semibold text-gray-600">
              @$7.00
            </span>
            <span className="text-[1.2rem] font-semibold text-gray-600">
              $28.00
            </span>
          </div>
        </div>

        <button className="rounded-full cursor-pointer p-[6px]! cancel-btn">
          <img
            src="../../assets/images/icon-remove-item.svg"
            alt="cancel icon"
          />
        </button>
      </div>

      <hr />

      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-[1.3rem] mb-2">
            Vanilla Panna Cotta
          </p>

          <div className="flex items-center gap-3">
            <span className="text-[1.2rem] font-semibold text-[var(--color-red)]">
              2x
            </span>
            <span className="text-[1.2rem] font-semibold text-gray-600">
              @$5.50
            </span>
            <span className="text-[1.2rem] font-semibold text-gray-600">
              $13.00
            </span>
          </div>
        </div>

        <button className="rounded-full cursor-pointer p-[6px]! cancel-btn">
          <img
            src="../../assets/images/icon-remove-item.svg"
            alt="cancel icon"
          />
        </button>
      </div>

      <div className="flex items-center justify-between">
        <span>Order Total</span>

        <p className="text-3xl font-bold">$46.50</p>
      </div>

      <div className="flex items-center justify-center gap-4 rounded-2xl bg-[var(--color-rose-50)] py-[8px]!">
        <img src="../assets/images/icon-carbon-neutral.svg" alt="carbon icon" />

        <p>
          This is a <strong>carbon-neutral</strong> delivery
        </p>
      </div>

      <button className="text-white cursor-pointer rounded-full font-bold text-[1.3rem] bg-[var(--color-red)] py-[8px]! px-[3rem]! hover:bg-[#8b290b] active:bg-[#8b290b] order-btn">
        Confirm Order
      </button>
    </div>
  );
};
