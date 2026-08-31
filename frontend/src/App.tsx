import { Navigate, Outlet, Route, Routes } from 'react-router';
import { LoginPage } from './pages/Auth/LoginPage';
import { RegisterPage } from './pages/Auth/RegisterPage';
import { Layout } from './components/LayoutPage';
import { useAuthStore } from './stores/auth';
import { DashboardPage } from './pages/Dashboard/DashboardPage';
import { ProfilePage } from './pages/Profile/ProfilePage';
import { CategoriesPage } from './pages/Category/CategoriesPage';
import { AuthenticatedPage } from './components/AuthenticatedPage';
import { TransactionsPage } from './pages/Transaction/TransactionsPage';

function ProtectedRoute() {
	const { isAuthenticated } = useAuthStore();

	return isAuthenticated ? (
		<AuthenticatedPage>
			<Outlet />
		</AuthenticatedPage>
	) : (
		<Navigate to="/login" replace />
	);
}

function PublicRoute({ children }: { children: React.ReactNode }) {
	const { isAuthenticated } = useAuthStore();
	return !isAuthenticated ? <>{children}</> : <Navigate to="/" replace />;
}

function App() {
	return (
		<Layout>
			<Routes>
				<Route
					path="/login"
					element={
						<PublicRoute>
							<LoginPage />
						</PublicRoute>
					}
				/>
				<Route
					path="/register"
					element={
						<PublicRoute>
							<RegisterPage />
						</PublicRoute>
					}
				/>
				<Route element={<ProtectedRoute />}>
					<Route index element={<DashboardPage />} />
					<Route path="profile" element={<ProfilePage />} />
					<Route path="categories" element={<CategoriesPage />} />
					<Route path="transactions" element={<TransactionsPage />} />
				</Route>
			</Routes>
		</Layout>
	);
}

export default App;
