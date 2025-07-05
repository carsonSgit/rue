# Contributing to Rue 🤝

## Getting Started

1. Fork the repository
2. Create a new branch for your feature
3. Make your changes
4. Submit a pull request

## Development Workflow

### Branch Naming

- Feature: `feature/description`
- Bug fix: `fix/description`
- Documentation: `docs/description`
- Refactor: `refactor/description`

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting
- `refactor`: Code restructuring
- `test`: Tests
- `chore`: Maintenance

Example:
```
feat(auth): add password reset functionality

- Implement password reset form
- Add email service integration
- Update navigation flow
```

### Pull Request Process

1. Update documentation
2. Update tests
3. Get review from at least one team member
4. Squash commits before merging

## Code Style Guide

### TypeScript

- Use TypeScript for all new code
- Define interfaces for props and state
- Use type inference when obvious
- Export types from feature-specific `types.ts`

```typescript
// Good
interface Props {
  user: User;
  onUpdate: (user: User) => void;
}

// Bad
interface Props {
  user: any;
  onUpdate: Function;
}
```

### React/React Native

- Use functional components with hooks
- Props interface should be named `Props`
- Use destructuring for props
- Keep components focused and small

```typescript
// Good
const UserCard: React.FC<Props> = ({ user, onUpdate }) => {
  return (
    <View>
      <Text>{user.name}</Text>
    </View>
  );
};

// Bad
const UserCard = (props) => {
  return (
    <View>
      <Text>{props.user.name}</Text>
    </View>
  );
};
```

### Styling

- Use styled-components/native
- Keep styles close to components
- Use theme variables for colors, spacing
- Name style files: `ComponentName.styles.ts`

```typescript
// Good
const Container = styled.View`
  padding: ${({ theme }) => theme.spacing.medium}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

// Bad
const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#ffffff',
  },
});
```

### File Organization

- One component per file
- Group related components in folders
- Keep index files for clean exports
- Separate logic from UI components

```
feature/
  ├── components/
  │   ├── index.ts
  │   ├── ComponentOne.tsx
  │   └── ComponentOne.styles.ts
  ├── screens/
  │   ├── index.ts
  │   ├── ScreenOne.tsx
  │   └── ScreenOne.styles.ts
  ├── hooks/
  │   └── index.ts
  └── types.ts
```

## State Management

- Use Context for global state
- Use local state for component-specific state
- Document state shape and updates
- Keep state normalized

```typescript
// Good
const [user, setUser] = useState<User | null>(null);

// Bad
const [userData, setUserData] = useState<any>({});
```

## Performance Guidelines

- Use `useMemo` and `useCallback` appropriately
- Implement virtualization for long lists
- Optimize images and assets
- Profile render performance

```typitten
// Good
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

// Bad
const value = computeExpensiveValue(a, b); // Recomputed every render
```

## Security Best Practices

- Never store sensitive data in state
- Use secure storage for tokens
- Validate all user input
- Handle errors gracefully

## Questions?

DM