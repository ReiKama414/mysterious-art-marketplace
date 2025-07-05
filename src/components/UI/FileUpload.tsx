import React, { useState } from "react";
import { Palette, X } from "lucide-react";

interface FileUploadProps {
	onFileChange: (file: File | null) => void;
	value?: File | null;
	error?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileChange, value, error }) => {
	const [preview, setPreview] = useState<string | null>(null);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0] || null;
		onFileChange(file);
		if (file) {
			setPreview(URL.createObjectURL(file));
		} else {
			setPreview(null);
		}
	};

	const removeImage = () => {
		onFileChange(null);
		setPreview(null);
	};

	return (
		<label
			className={`border-2 border-dashed p-6 rounded-lg cursor-pointer block text-center hover:border-indigo-500 transition-colors ${
				error ? "border-red-500" : "border-gray-300 dark:border-gray-600"
			}`}>
			{preview ? (
				<div className="relative group">
					<img src={preview} alt="preview" className="w-full h-40 object-cover rounded-lg mb-2" />
					<button
						type="button"
						onClick={(e) => {
							e.stopPropagation();
							removeImage();
						}}
						className="absolute top-2 right-2 bg-black/60 text-white rounded-full p-1 hover:bg-black/80 transition">
						<X className="h-4 w-4" />
					</button>
				</div>
			) : (
				<>
					<Palette className="h-8 w-8 text-gray-400 mx-auto mb-2" />
					<p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Click to upload or drag and drop</p>
					<p className="text-xs text-gray-500 dark:text-gray-500">{value ? value.name : "No file selected"}</p>
				</>
			)}
			<input type="file" accept="image/*" onChange={handleChange} className="hidden" />
		</label>
	);
};

export default FileUpload;
