export type Permission = {
  id: string;
  name: string;
  description: string;
  module: string;
};

export type Role = {
  id: string;
  name: string;
  description: string;
  permissions: string[];
  createdAt: string;
  updatedAt: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  roleId: string;
  status: 'active' | 'inactive';
  lastLogin: string;
  createdAt: string;
};

export type TabType = 'users' | 'roles' | 'permissions';