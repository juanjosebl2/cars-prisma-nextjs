import { Calendar, Car, Heart, SquareChartGantt, NotebookPen } from "lucide-react";

export const dataGeneralSidebar = [
    {
        icon: Car,
        label: "Coches",
        href: "/dashboard",
    },
    {
        icon: Calendar,
        label: "Coches reservados",
        href: "/reserves",
    },
    {
        icon: Heart,
        label: "Coches favoritos",
        href: "/loved-cars",
    }
]

export const dataAdminSidebar = [
    {
        icon: SquareChartGantt,
        label: "Administrar coches",
        href: "/dashboard/admin/cars-manager",
    },
    {
        icon: NotebookPen,
        label: "Todas las reservas",
        href: "/dashboard/admin/reserves-admin",
    }
]