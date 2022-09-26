import React from 'react'

const Table = ({header, body}) => {
    return (
        <>
            <table className="border-collapse table-fixed w-full text-sm">
                <thead>
                    <tr>{
                        header.length ? (header.map((headerTr, headerTrIndex) => {
                            return (
                                <th key={headerTrIndex}
                                    className={
                                        "border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200" + (
                                        headerTr.align === "center" ? " text-center" : headerTr.align === "left" ? " text-left" : " text-right"
                                    )
                                }>
                                    {
                                    headerTr.label
                                }</th>
                            )
                        })) : null
                    }</tr>
                </thead>
                <tbody className="bg-white dark:bg-slate-800">
                    {
                    body.length ? (body.map((bodyTr, bodyTrIndex) => {
                        return (
                            <tr key={bodyTrIndex}>
                                {
                                header.map((headerTr, headerTrIndex) => {
                                    return (
                                        <td key={headerTrIndex}
                                            className={
                                                "border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400" + (
                                                headerTr.align === "center" ? " text-center" : headerTr.align === "left" ? " text-left" : " text-right"
                                            )
                                        }>
                                            {
                                            bodyTr[headerTr.id]
                                        } </td>
                                    )
                                })
                            }</tr>
                        )
                    })) : null
                }</tbody>
            </table>
        </>
    )
}

export default Table
