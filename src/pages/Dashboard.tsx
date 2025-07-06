import React from 'react';
import DataTable from '../components/DataTable';
import Charts from '../components/Charts';
import CalendarComponent from '../components/Calendar';
import KanbanBoard from '../components/KanbanBoard';

const Dashboard = () => (
  <div>
    <h1>Admin Dashboard</h1>
    <Charts />
    <DataTable />
    <CalendarComponent />
    <KanbanBoard />
  </div>
);

export default Dashboard;