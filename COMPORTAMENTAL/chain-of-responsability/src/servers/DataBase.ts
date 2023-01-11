import PermissionType from './PermissionType';

interface DataBaseItem {
  email: string;
  password: string;
  permission: PermissionType;
}

const DataBase: DataBaseItem[] = [
  {
    email: 'stanlley41@gmail.com',
    password: '123456',
    permission: PermissionType.USER,
  },
  {
    email: 'stanlley42@gmail.com',
    password: '123456',
    permission: PermissionType.ADMIN,
  },
];

export { DataBase };
