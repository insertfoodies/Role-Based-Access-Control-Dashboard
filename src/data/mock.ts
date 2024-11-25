import { Permission, Role, User } from '../types';

export const mockPermissions: Permission[] = [
  {
    id: '1',
    name: 'users.view',
    description: 'View users list and details',
    module: 'Users',
  },
  {
    id: '2',
    name: 'users.create',
    description: 'Create new users',
    module: 'Users',
  },
  {
    id: '3',
    name: 'users.edit',
    description: 'Edit existing users',
    module: 'Users',
  },
  {
    id: '4',
    name: 'users.delete',
    description: 'Delete users',
    module: 'Users',
  },
  {
    id: '5',
    name: 'roles.view',
    description: 'View roles and permissions',
    module: 'Roles',
  },
  {
    id: '6',
    name: 'roles.manage',
    description: 'Manage roles and permissions',
    module: 'Roles',
  },
];

export const mockRoles: Role[] = [
  {
    id: '1',
    name: 'Administrator',
    description: 'Full system access',
    permissions: ['1', '2', '3', '4', '5', '6'],
    createdAt: '2024-03-10T10:00:00Z',
    updatedAt: '2024-03-10T10:00:00Z',
  },
  {
    id: '2',
    name: 'User Manager',
    description: 'Manage users only',
    permissions: ['1', '2', '3'],
    createdAt: '2024-03-10T10:00:00Z',
    updatedAt: '2024-03-10T10:00:00Z',
  },
  {
    id: '3',
    name: 'Viewer',
    description: 'View-only access',
    permissions: ['1', '5'],
    createdAt: '2024-03-10T10:00:00Z',
    updatedAt: '2024-03-10T10:00:00Z',
  },
];

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces',
    roleId: '1',
    status: 'active',
    lastLogin: '2024-03-10T12:00:00Z',
    createdAt: '2024-03-01T10:00:00Z',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces',
    roleId: '2',
    status: 'active',
    lastLogin: '2024-03-10T11:30:00Z',
    createdAt: '2024-03-02T10:00:00Z',
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike@example.com',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces',
    roleId: '3',
    status: 'inactive',
    lastLogin: '2024-03-09T15:45:00Z',
    createdAt: '2024-03-03T10:00:00Z',
  },
];