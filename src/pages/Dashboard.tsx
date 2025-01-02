import {Customer} from "../models/Customer";
import {useSelector} from "react-redux";

export function Dashboard() {

    const customers :Customer[] = useSelector(state => state)
    return (
        <>
            Dashboard
            {customers.map((customer: Customer) => (<div key={customer.email}>{customer.name + ' '+ customer.email + ' '+ customer.phone }</div>))}
        </>
    );
}