"use client";

import React, { FormEvent } from "react";

function PostJobPage() {
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);
		const data = {
			title: formData.get("title"),
			company: formData.get("company"),
			location: formData.get("location"),
			description: formData.get("description"),
			type: formData.get("type"),
			salary: formData.get("salary"),
		};

		try {
			const res = await fetch("/api/jobs", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			window.location.href = "/jobs";
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="max-w-2xl mx-auto">
			<h1 className="text-2xl font-bold text-gray-900 mb-6">
				Post a Job
			</h1>
			<form className="space-y-6" onSubmit={handleSubmit}>
				<div>
					<label
						htmlFor="title"
						className="block text-sm font-medium text-gray-700"
					>
						Job Title
					</label>
					<input
						type="text"
						id="title"
						name="title"
						className="text-gray-900 mt-1 block w-full rounded-md px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
					/>
				</div>

				<div>
					<label
						htmlFor="company"
						className="block text-sm font-medium text-gray-700"
					>
						Company
					</label>
					<input
						type="text"
						id="company"
						name="company"
						className="text-gray-900 mt-1 block w-full rounded-md px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
					/>
				</div>

				<div>
					<label
						htmlFor="location"
						className="block text-sm font-medium text-gray-700"
					>
						Location
					</label>
					<input
						type="text"
						id="location"
						name="location"
						className="text-gray-900 mt-1 block w-full rounded-md px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
					/>
				</div>
				<div>
					<label
						htmlFor="type"
						className="block text-sm font-medium text-gray-700"
					>
						Job Type
					</label>
					<select
						id="type"
						name="type"
						className="text-gray-900 mt-1 block w-full rounded-md px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
					>
						<option value="">Select a Type</option>
						<option value="internship">Internship</option>
						<option value="full-time">Full Time</option>
						<option value="part-time">Part Time</option>
						<option value="contract">Contract</option>
					</select>
				</div>

				<div>
					<label
						htmlFor="description"
						className="block text-sm font-medium text-gray-700"
					>
						Job Description
					</label>
					<textarea
						id="description"
						name="description"
						rows={4}
						className="text-gray-900 mt-1 block w-full rounded-md px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
					></textarea>
				</div>

				<div>
					<label
						htmlFor="salary"
						className="block text-sm font-medium text-gray-700"
					>
						Salary
					</label>
					<input
						type="text"
						id="salary"
						name="salary"
						placeholder="e.g., $80,000 - $100,000"
						className="text-gray-900 mt-1 block w-full rounded-md px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
					/>
				</div>
				<button
					type="submit"
					className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
				>
					Post Job
				</button>
			</form>
		</div>
	);
}

export default PostJobPage;
