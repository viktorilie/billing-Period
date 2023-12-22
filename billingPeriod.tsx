const billingPeriod = (): ReactElement => {
    return (
      <div className=" d-flex flex-row align-items-center ">
        <div className="pe-2">
          <small className="text-dark">Billing period:</small>
        </div>
        <div>
          <select className="form-select form-select-sm text-dark">
            <option value="2023-08-01_2023-08-31">2023-08-01_2023-08-31</option>
            <option value="2023-07-01_2023-07-31">2023-07-01_2023-07-31</option>
            <option value="2023-06-01_2023-06-30">2023-06-01_2023-06-30</option>
            <option value="2023-05-01_2023-05-31">2023-05-01_2023-05-31</option>
            <option value="2023-04-01_2023-04-30">2023-04-01_2023-04-30</option>
            <option value="2023-03-01_2023-03-30">2023-03-01_2023-03-30</option>
            <option value="2023-02-01_2023-02-30">2023-02-01_2023-02-30</option>
            <option value="2023-01-01_2023-01-31">2023-01-01_2023-01-31</option>
            <option value="2022-12-01_2022-12-31">2022-12-01_2022-12-31</option>
          </select>
        </div>
      </div>
    );
  };
