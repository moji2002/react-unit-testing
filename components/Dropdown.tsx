import { FC, Fragment, ReactNode } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

export type Node = {
  id: string;
  label: string;
  children?: Node[];
};

type Props = {
  selected: any;
  setSelected: any;
  multiple?: boolean;
  root: Node;
};

const Dropdown: FC<Props> = ({ root, selected, setSelected, multiple }) => {
  const build = (node: Node): ReactNode => {
    return (
      <>
        <Listbox.Option
          className={({ active }) =>
            `relative cursor-default select-none py-2 pl-10 pr-4 ${
              active ? "bg-amber-100 text-amber-900" : "text-gray-900"
            }`
          }
          value={node}
        >
          {({ selected }) => (
            <>
              <span
                className={`block truncate ${
                  selected ? "font-medium" : "font-normal"
                }`}
              >
                {node.label}
              </span>
              {selected && (
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                </span>
              )}
            </>
          )}
        </Listbox.Option>
        {node.children?.map((child) => {
          return <div className="pl-4" key={child.id}>{build(child)}</div>;
        })}
      </>
    );
  };

  return (
    <div className="fixed  w-72">
      <Listbox value={selected} onChange={setSelected} multiple={multiple}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{"title"}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
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
              {build(root)}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default Dropdown;
