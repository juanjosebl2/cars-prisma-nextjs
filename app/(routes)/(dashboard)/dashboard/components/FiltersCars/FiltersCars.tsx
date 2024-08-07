import { SelectGroup, SelectLabel } from "@radix-ui/react-select";
import { FiltersCarsProps } from "./FiltersCars.types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

export function FiltersCars(props: FiltersCarsProps) {
  const { clearFilters, setFilters, filters } = props;

  const handleFilter = (filter: string, value: string) => {
    setFilters(filter, value);
  };
  return (
    <div className="flex flex-col mt-5 mb-8 space-y-2 md:flex-row md:space-y-0 md:gap-5 gap-x-4">
      <Select
        onValueChange={(value) => handleFilter("type", value)}
        value={filters.type}
      >
        <SelectTrigger className="lg:w-[180px] w-full">
          <SelectValue placeholder="Tipo de vehiculo" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Tipo de vehiculo</SelectLabel>
            <SelectItem value="sedan">Sedan</SelectItem>
            <SelectItem value="suv">Suv</SelectItem>
            <SelectItem value="coupe">Coupe</SelectItem>
            <SelectItem value="familiar">Familiar</SelectItem>
            <SelectItem value="luxe">Luxe</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value) => handleFilter("engine", value)}
        value={filters.engine}
      >
        <SelectTrigger className="lg:w-[180px] w-full">
          <SelectValue placeholder="Tipo de motor" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Tipo de motor</SelectLabel>
            <SelectItem value="gasolina">Gasolina</SelectItem>
            <SelectItem value="diesel">Diesel</SelectItem>
            <SelectItem value="electrico">Electrico</SelectItem>
            <SelectItem value="hibrido">Hibrido</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value) => handleFilter("transmission", value)}
        value={filters.transmission}
      >
        <SelectTrigger className="lg:w-[180px] w-full">
          <SelectValue placeholder="Cambio de marchas" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Cambio de marchas</SelectLabel>
            <SelectItem value="automatico">Automatico</SelectItem>
            <SelectItem value="manual">Manual</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value) => handleFilter("people", value)}
        value={filters.people}
      >
        <SelectTrigger className="lg:w-[180px] w-full">
          <SelectValue placeholder="Asientos" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Tipo de vehiculo</SelectLabel>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="4">4</SelectItem>
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="7">7</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Button onClick={clearFilters}>
        Borrar filtros <Trash className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
}
