import { Table } from "reactstrap";

const CustomTable = (props:any) => {
  return (
                  <Table responsive bordered>
                  <thead>
                      <tr>
                          <th>ResourceGroup</th>
                          <th>ResourceLocation</th>
                          <th>ConsumedQuantity</th>
                          <th>Cost</th>
                          <th>Date</th>
                          <th>Location</th>
                          <th>MeterCategory</th>
                          <th>ServiceName</th>
                          <th>UnitOfMeasure</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          props.data.map((app: any) =>
                              <tr>
                                  <td> {app?.ResourceGroup}</td>
                                  <td> {app?.ResourceLocation}</td>
                                  <td> {app?.ConsumedQuantity}</td>
                                  <td> {app?.Cost}</td>
                                  <td> {app?.Date}</td>
                                  <td> {app?.Location}</td>
                                  <td> {app?.MeterCategory}</td>
                                  <td> {app?.ServiceName}</td>
                                  <td> {app?.UnitOfMeasure}</td>
                              </tr>
                          )
                      }
               
                  </tbody>
              </Table>
  )
}

export default CustomTable