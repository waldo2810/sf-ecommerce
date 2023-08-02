"use client";

import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Check, ChevronsUpDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setParams } from "@/redux/features/sortingSlice";
import { SortFilterItem } from "@/types";

const sorting = [
  { id: 1, name: "Price: Low to High", value: { sort: "price" } },
  {
    id: 2,
    name: "Price: High to Low",
    value: { sort: "price", order: "desc" },
  },
];

export default function Sorting() {
  const [selected, setSelected] = useState(sorting[0]);
  const dispatch = useAppDispatch();
  const params = useAppSelector((state) => state.sortingReducer.params);

  const handleChange = (value: SortFilterItem) => {
    dispatch(setParams(value));
  };

  useEffect(() => {
    setSelected(params);
  }, [params]);

  return (
    <div className="w-60 z-10 cursor-pointer">
      <Listbox value={selected} onChange={handleChange}>
        <div className="relative">
          <Listbox.Button className="relative w-full rounded-md bg-white py-2 pl-3 pr-10 text-left shadow-sm sm:text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronsUpDown
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {sorting.map((sort) => (
                <Listbox.Option
                  key={sort.id}
                  className={({ active }) =>
                    `relative select-none py-2 pl-10 pr-4 ${
                      active ? "bg-gray-100 text-gray-700" : "text-gray-900"
                    }`
                  }
                  value={sort}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {sort.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <Check className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
