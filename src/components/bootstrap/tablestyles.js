

function Tablestyle() {


    const data = [
        {
            th1: "ID",
            th2: "NAME",
            th3: "age",
            th4: "branch"
        },
        {
            td1: 1,
            td2: "navya",
            td3: 21,
            td4: "CSE"
        },
        {
            td1: 1,
            td2: "navya",
            td3: 21,
            td4: "CSE"
        },
        {
            td1: 1,
            td2: "navya",
            td3: 21,
            td4: "CSE"
        },
        {
            td1: 1,
            td2: "navya",
            td3: 21,
            td4: "CSE"
        }
    ]


    return (
        <>
            {/* <div class="container"> */}
            {/* <table class="table"> */}
            <div class="container">
                <h2>Bordered Table</h2>
                {/* <p>The .table-bordered class adds borders to a table:</p> */}
                <table class="table table-bordered">
                    {/* <thead> */}
                    <thead class="table-dark">

                        <tr>
                            <th>{data[0].th1}</th>
                            <th>{data[0].th2}</th>
                            <th>{data[0].th3}</th>
                            <th>{data[0].th4}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{data[1].td1}</td>
                            <td>{data[1].td2}</td>
                            <td>{data[1].td3}</td>
                            <td>{data[1].td4}</td>
                        </tr>
                        <tr>
                            <td>{data[2].td1}</td>
                            <td>{data[2].td2}</td>
                            <td>{data[2].td3}</td>
                            <td>{data[2].td4}</td>
                        </tr>
                        <tr>
                            <td>{data[3].td1}</td>
                            <td>{data[3].td2}</td>
                            <td>{data[3].td3}</td>
                            <td>{data[3].td4}</td>
                        </tr>

                    </tbody>
                    </table>
                    </div>
            {/* </table> */}
            

        </>
    )
}

export default Tablestyle