import React, { useEffect } from 'react'

export default function CategoryTable(props) {

    return (


        <>
            <table className="categoryTable">
                <thead>
                    <tr>
                        <th>
                            Category Name:
                       </th>
                        <th>
                            Current Spent:
                       </th>
                        <th>
                            Max To Spend:
                       </th>
                    </tr>
                </thead>
                <tbody>
                    {props.Categories.map((data, key) => {

                        if (data.CurrentSpent < data.MaxSpent) {
                            return (

                                <tr key={key}>
                                    <td>
                                        {data.Name}
                                    </td>
                                    <td style={{ backgroundColor: 'green' }}>

                                        {data.CurrentSpent}
                                    </td>
                                    <td>
                                        {data.MaxSpent}
                                    </td>
                                </tr>
                            );

                        } else {
                            return (
                                <tr key={key}>
                                    <td>
                                        {data.Name}
                                    </td>
                                    <td style={{ backgroundColor: 'red' }}>

                                        {data.CurrentSpent}
                                    </td>
                                    <td>
                                        {data.MaxSpent}
                                    </td>
                                </tr>
                            );

                        }

                    })}
                </tbody>
            </table>
        </>


    )
}
