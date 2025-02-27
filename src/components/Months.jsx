import Month from "./Month";

const Months = () => {
    const monthNames = [
        { MONTH: "JANUARY" },
        { MONTH: "FEBRUARY" },
        { MONTH: "MARCH" },
        { MONTH: "APRIL" },
        { MONTH: "MAY" },
        { MONTH: "JUNE" },
        { MONTH: "JULY" },
        { MONTH: "AUGUST" },
        { MONTH: "SEPTEMBER" },
        { MONTH: "OCTOBER" },
        { MONTH: "NOVEMBER" },
        { MONTH: "DECEMBER" }
    ];

    return (
        <>
            <div className="container mt-4">
                <div className="row p-1 shadow rounded">
                    {monthNames.map((month, index) => (
                        <div key={index} className="col-lg-3 col-md-4 col-sm-6 p-2">
                            <div className="text-center shadow">
                                <Month
                            MONTH = {month.MONTH}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Months;
