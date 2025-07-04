import { ChevronDown } from "lucide-react";
import { FC, useState } from "react";

interface Option {
	value: string;
	label: string;
}

interface CustomSelectProps {
	value: string;
	onChange: (value: string) => void;
	options: Option[];
	placeholder?: string;
	className?: string;
}

const CustomSelect: FC<CustomSelectProps> = ({
	value,
	onChange,
	options,
	placeholder = "Select...",
	className = "",
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [selectedOption, setSelectedOption] = useState<Option | null>(
		options.find((opt) => opt.value === value) || null
	);

	const handleSelect = (option: Option) => {
		setSelectedOption(option);
		onChange(option.value);
		setIsOpen(false);
	};

	return (
		<div className={`relative ${className}`}>
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl text-left text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 hover:border-indigo-300 dark:hover:border-indigo-600 group">
				<div className="flex items-center justify-between">
					<span className={selectedOption ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"}>
						{selectedOption ? selectedOption.label : placeholder}
					</span>
					<ChevronDown
						className={`h-5 w-5 text-gray-400 transition-transform duration-200 group-hover:text-indigo-500 ${
							isOpen ? "rotate-180" : ""
						}`}
					/>
				</div>
			</button>

			{isOpen && (
				<>
					<div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
					<div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl shadow-xl z-20 animate-fade-in-up overflow-hidden">
						<div className="max-h-60 overflow-y-auto">
							{options.map((option, index) => (
								<button
									key={option.value}
									onClick={() => handleSelect(option)}
									className={`w-full px-4 py-3 text-left hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors duration-200 ${
										selectedOption?.value === option.value
											? "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300"
											: "text-gray-900 dark:text-white"
									} ${index === 0 ? "rounded-t-xl" : ""} ${index === options.length - 1 ? "rounded-b-xl" : ""}`}
									style={{ animationDelay: `${index * 0.05}s` }}>
									{option.label}
								</button>
							))}
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default CustomSelect;
