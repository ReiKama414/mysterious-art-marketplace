import { FC, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, User } from "lucide-react";
import PageTitle from "../../components/Layout/PageTitle";

const AdminLogin: FC = () => {
	const navigate = useNavigate();
	const [credentials, setCredentials] = useState<{ username: string; password: string }>({
		username: "",
		password: "",
	});

	useEffect(() => {
		const loggedInDate = localStorage.getItem("adminLoggedInDate");
		const today = new Date().toISOString().split("T")[0]; // yyyy-mm-dd

		if (loggedInDate === today) {
			navigate("/admin/dashboard");
		}
	}, [navigate]);

	const handleLogin = (e: FormEvent) => {
		e.preventDefault();
		if (credentials.username === "admin" && credentials.password === "admin") {
			const today = new Date().toISOString().split("T")[0];
			localStorage.setItem("adminLoggedInDate", today);
			navigate("/admin/dashboard");
		} else {
			alert("Invalid credentials. Use: admin/admin");
            setCredentials({ username: "", password: "" });
            localStorage.removeItem("adminLoggedInDate");

		}
	};

	return (
		<div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <PageTitle titleKey="Admin Login" />
			<div className="max-w-md w-full">
				<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
					<div className="text-center mb-8">
						<div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
							<Lock className="h-8 w-8 text-white" />
						</div>
						<h1 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Login</h1>
						<p className="text-gray-600 dark:text-gray-400 mt-2">Access the admin dashboard</p>
					</div>

					<form onSubmit={handleLogin} className="space-y-6">
						<div>
							<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Username</label>
							<div className="relative">
								<User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
								<input
									type="text"
									value={credentials.username}
									onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
									className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none focus:border-transparent"
									placeholder="Enter username"
									required
								/>
							</div>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
							<div className="relative">
								<Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
								<input
									type="password"
									value={credentials.password}
									onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
									className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none focus:border-transparent"
									placeholder="Enter password"
									required
								/>
							</div>
						</div>

						<button
							type="submit"
							className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
							Login
						</button>
					</form>

					<div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
						<p className="text-sm text-gray-600 dark:text-gray-400 text-center">
							Demo credentials:
							<br />
							Username: <strong>admin</strong>
							<br />
							Password: <strong>admin</strong>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminLogin;
