# Dependencies Overview 📦

## Core Dependencies

### React Native & Expo
- **react-native**: Mobile app framework
- **expo**: Development platform and tools
- **expo-cli**: Command line interface
- Why: Foundation for cross-platform mobile development

### Navigation
- **@react-navigation/native**: Navigation container
- **@react-navigation/stack**: Stack navigator
- **@react-navigation/bottom-tabs**: Tab navigation
- Why: Handle screen navigation and routing

### State Management
- **@reduxjs/toolkit**: Modern Redux with utilities
- **react-redux**: React bindings for Redux
- Why: Global state management with good dev tools

### UI Components
- **styled-components**: Styling solution
- **react-native-paper**: Material Design components
- **react-native-vector-icons**: Icon library
- Why: Consistent, themeable UI components

### Maps & Location
- **react-native-maps**: Map integration
- **expo-location**: Location services
- Why: Core feature for spot discovery

### Authentication
- **@react-native-async-storage/async-storage**: Local storage
- **expo-auth-session**: OAuth handling
- Why: Secure user authentication

## Development Dependencies

### TypeScript
- **typescript**: Type checking
- **@types/***: Type definitions
- Why: Type safety and better IDE support

### Testing
- **jest**: Testing framework
- **@testing-library/react-native**: Component testing
- Why: Ensure code quality

### Linting & Formatting
- **eslint**: Code linting
- **prettier**: Code formatting
- Why: Consistent code style

### Build Tools
- **metro**: JavaScript bundler
- **babel**: JavaScript compiler
- Why: Required for React Native

## Version Reference

```json
{
  "dependencies": {
    "@react-navigation/native": "^6.0.0",
    "@react-navigation/stack": "^6.0.0",
    "@react-navigation/bottom-tabs": "^6.0.0",
    "@reduxjs/toolkit": "^1.9.0",
    "expo": "~47.0.0",
    "react": "18.1.0",
    "react-native": "0.70.5",
    "react-native-maps": "1.3.2",
    "react-native-paper": "^5.0.0",
    "styled-components": "^5.3.6"
  },
  "devDependencies": {
    "@types/react": "~18.0.24",
    "@types/react-native": "~0.70.6",
    "typescript": "^4.6.3",
    "jest": "^29.2.1",
    "eslint": "^8.28.0",
    "prettier": "^2.8.0"
  }
}
```

## Installation Guide

### Fresh Install
```bash
npm install
```

### Update Dependencies
```bash
npm update
```

### Add New Dependency
```bash
npm install package-name
```

### Add Dev Dependency
```bash
npm install --save-dev package-name
```

## Dependency Groups

### UI Layer
- styled-components
- react-native-paper
- react-native-vector-icons
- react-native-gesture-handler

### Data Layer
- @reduxjs/toolkit
- react-redux
- @react-native-async-storage/async-storage

### Navigation Layer
- @react-navigation/native
- @react-navigation/stack
- @react-navigation/bottom-tabs

### API Layer
- axios
- react-query

### Security Layer
- expo-auth-session
- expo-secure-store

## Common Issues & Solutions

### Metro Bundler Issues
```bash
# Clear metro cache
npm start -- --reset-cache
```

### Pod Install Issues (iOS)
```bash
cd ios
pod deintegrate
pod install
```

### Android Build Issues
```bash
cd android
./gradlew clean
```

## Dependency Update Strategy

### Regular Updates
1. Check for updates weekly
2. Update non-breaking changes
3. Test thoroughly
4. Document any issues

### Major Updates
1. Review changelog
2. Create update plan
3. Test in staging
4. Update documentation

## Security Considerations

### Audit Dependencies
```bash
npm audit
```

### Fix Security Issues
```bash
npm audit fix
```

### Manual Review
- Check GitHub security alerts
- Review dependency licenses
- Monitor security bulletins

## Performance Impact

### Bundle Size
- Monitor bundle size
- Use code splitting
- Lazy load when possible

### Startup Time
- Measure TTI (Time to Interactive)
- Profile with Performance Monitor
- Optimize heavy dependencies

## Adding New Dependencies

### Checklist
1. Check bundle size impact
2. Verify license compatibility
3. Review maintenance status
4. Test performance impact
5. Update documentation

### Documentation Template
```markdown
## Package Name

### Purpose
- What problem does it solve?
- Why was it chosen?

### Usage
- Basic implementation
- Common patterns
- Gotchas

### Performance
- Bundle size impact
- Runtime considerations

### Alternatives Considered
- Other options
- Why this won
``` 