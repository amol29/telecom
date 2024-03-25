import React from "react";
import BootstrapTable from "react-bootstrap/Table";

export default function Table({headers = [], data = [], renderItem}){
  return <BootstrapTable>
            <thead>
              <tr>
                {headers.map((item)=> <th className={'text-capitalize'} key={item}>{item}</th>)}
              </tr>
             </thead>
             <tbody>
              {data.map((dataItem, idx)=> {
                return (
                   <tr key={idx}>
                    {renderItem ? renderItem(dataItem, idx) : headers.map((item)=> <td key={item}>{dataItem[item]}</td>)}
                  </tr>
                  )
              })}             
            </tbody>
     </BootstrapTable>
}