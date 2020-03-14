export function withRouter<T extends {}>(
  Component: React.ComponentType<T & { router: NextRouter }>
): React.ComponentType<T>