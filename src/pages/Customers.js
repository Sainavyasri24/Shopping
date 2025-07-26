import RecentOrders from '../components/RecentOrders';
import RecentSales from '../components/RecentSales';

const Customers = () => {
  return (
    <div className="p-3">
      <h3>Customers</h3>
      <RecentOrders />
      <RecentSales />
    </div>
  );
};
export default Customers;
