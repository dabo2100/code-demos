import axios from 'axios';
import { domain } from '../store';
import { useEffect, useRef, useState } from 'react';

export default function InvoicesPage() {
  const [invoices, setInvoices] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  const [totalRecord, setTotalRecord] = useState(0);
  const startDate = useRef();
  const endDate = useRef();

  const getAllInvoices = (start, end) => {
    let params = {
      populate: '*',
      pagination: { page: activePage, pageSize: pageSize },
    };

    if (start) {
      params.filters = {
        $and: [{ createdAt: { $gte: start } }, { createdAt: { $lte: end } }],
      };
    }

    axios.get(domain + '/api/invoices', { params: params }).then((res) => {
      setInvoices(res.data.data);
      setTotalRecord(res.data.meta.pagination.total);
    });
  };

  useEffect(() => {
    setActivePage(1);
    getAllInvoices();
  }, [pageSize]);
  useEffect(() => {
    getAllInvoices();
  }, [activePage]);

  return (
    <div className="w-full h-full overflow-hidden flex flex-col">
      <div className="w-full p-3 flex items-center gap-3 border-b">
        <input ref={startDate} className="input" type="date" placeholder="Start Date" />
        <input ref={endDate} className="input" type="date" placeholder="Due Date" />
        <button onClick={() => getAllInvoices(startDate.current.value, endDate.current.value)} className="btn btn-primary">
          Get Invoices
        </button>
        <select className="select" onChange={(event) => setPageSize(event.target.value)}>
          <option value={3}>3</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
        </select>
      </div>

      <div className="w-full  grow h-1 overflow-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Invoice ID</th>
              <th>Invoice Total</th>
              <th>Done By</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((el, index) => (
              <tr className="hover:bg-gray-800 cursor-pointer" key={el.documentId}>
                <td>{index + 1 + (activePage - 1) * pageSize}</td>
                <td>{el.documentId}</td>
                <td>{el?.content.reduce((acc, item) => (acc += item.price * item.qty), 0)} EGP</td>
                <td>{el.users_permissions_user?.username}</td>
                <td>
                  {el.createdAt?.split('T')[0]} [ {el.createdAt?.split('T')[1]}]
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="w-full p-3 flex items-center content-center gap-3 border-t">
        <div className="join">
          <button disabled={activePage == 1 && true} onClick={() => setActivePage(activePage - 1)} className="join-item btn">
            «
          </button>
          <button className="join-item btn">Page {activePage}</button>
          <button disabled={activePage == Math.ceil(totalRecord / pageSize) ? true : false} onClick={() => setActivePage(activePage + 1)} className="join-item btn">
            »
          </button>
        </div>
      </div>
    </div>
  );
}