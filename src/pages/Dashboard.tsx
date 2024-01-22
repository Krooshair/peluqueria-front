import Card from "../components/dashboard/Card";
import dayjs from "dayjs";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import { Line } from "react-chartjs-2";
import 'dayjs/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: '2024',
    },
  },
};

dayjs.locale('es');
const localizer = dayjsLocalizer(dayjs)
const messages = {
  allDay: 'Todo el día',
  previous: 'Ant.',
  next: 'Sig.',
  today: 'Hoy',
  month: 'Mes',
  week: 'Sem.',
  day: 'Día',
  agenda: 'Agenda',
  date: 'Fecha',
  time: 'Hora',
  event: 'Evento',
  // etc.
};

const Dashboard = () => {

  const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    datasets: [
      {
        label: 'S/',
        data: [431, 320, 631, 210, 302],
        fill: false,
        borderColor: 'rgb(9, 203, 48)',
        tension: 0.1
      }
    ]
  };

  return (
    <div className="w-full h-full overflow-auto p-4">
      <div className="flex h-full w-full gap-4 p-4">
        <div className="flex w-1/2 flex-col gap-2">
          <Card title="Filtro Rápido">
            <div className="flex h-full w-full flex-col justify-between">
              <h1 className="font-montserrat text-lg">Estilistas:</h1>
              <select
                id="estilistas"
                className="w-full rounded-lg bg-slate-200 p-2 font-montserrat shadow-md outline-rose-500"
              >
                <option value="">Todos</option>
                <option value="">Disponibles</option>
                <option value="">Ocupados</option>
              </select>
              <button className="rounded-lg bg-rose-500 py-2 font-salsa text-lg text-white duration-200 hover:bg-rose-400">
                Buscar
              </button>
              <button className="rounded-lg border border-rose-500 py-2 font-salsa text-lg text-rose-500 duration-200 hover:bg-rose-500 hover:text-white">
                Crear cita rapida
              </button>
            </div>
          </Card>
          <Card title="Citas sin direccion">
            <div className="h-full w-full overflow-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-rose-300">
                    <th className="border py-1">Nro</th>
                    <th className="border py-1">Fecha</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="cursor-pointer text-center even:bg-rose-100">
                    <td className="border py-1">001</td>
                    <td className="border py-1">12/03</td>
                  </tr>
                  <tr className="text-center even:bg-rose-100">
                    <td className="border py-1">001</td>
                    <td className="border py-1">12/03</td>
                  </tr>
                  <tr className="text-center even:bg-rose-100">
                    <td className="border py-1">001</td>
                    <td className="border py-1">12/03</td>
                  </tr>
                  <tr className="text-center even:bg-rose-100">
                    <td className="border py-1">001</td>
                    <td className="border py-1">12/03</td>
                  </tr>
                  <tr className="text-center even:bg-rose-100">
                    <td className="border py-1">001</td>
                    <td className="border py-1">12/03</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
        <Card title="Citas">
          <Calendar
            localizer={localizer}
            events={[
              {
                title: 'Cita Nro. 2301',
                start: new Date(2024, 0, 23, 9),
                end: new Date(2024, 0, 23, 10)
              }
            ]}
            startAccessor="start"
            endAccessor="end"
            min={dayjs().hour(9).minute(0).toDate()}
            max={dayjs().hour(18).minute(0).toDate()}
            messages={messages}
            style={{ height: '100%', width: '100%' }}
          />
        </Card>
      </div>
      <div className="flex h-full w-full gap-4 p-4">
        <div className="flex w-1/2 flex-col gap-2">
          <Card title="Cumpleaños de clientes">
            <div className="h-full w-full overflow-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-rose-300">
                    <th className="border py-1">Cliente</th>
                    <th className="border py-1">Fecha</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="cursor-pointer text-center even:bg-rose-100">
                    <td className="border py-1">Celia Cruz</td>
                    <td className="border py-1">12/03</td>
                  </tr>
                  <tr className="text-center even:bg-rose-100">
                    <td className="border py-1">Celia Cruz</td>
                    <td className="border py-1">12/03</td>
                  </tr>
                  <tr className="text-center even:bg-rose-100">
                    <td className="border py-1">Celia Cruz</td>
                    <td className="border py-1">12/03</td>
                  </tr>
                  <tr className="text-center even:bg-rose-100">
                    <td className="border py-1">Celia Cruz</td>
                    <td className="border py-1">12/03</td>
                  </tr>
                  <tr className="text-center even:bg-rose-100">
                    <td className="border py-1">Celia Cruz</td>
                    <td className="border py-1">12/03</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
        <Card title="Ganancios Mensuales">
          <Line options={options} data={data} style={{ width: '100%', height: '100%' }}/>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
