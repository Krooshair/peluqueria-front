import Card from "../components/dashboard/Card";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from '@fullcalendar/core/locales/es'

const Dashboard = () => {
  return (
    <div className="w-full h-full p-4 flex flex-col overflow-auto">
      <div className="w-full h-full p-4 gap-4 flex">
        <div className="w-1/2 flex flex-col gap-2">
          <Card title="Filtro Rápido"></Card>
          <Card title="Citas sin direccion"></Card>
        </div>
        <Card title="Citas">
          <FullCalendar 
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          selectable={true}
          editable={true}
          locale={esLocale}
          height="100%"/>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
