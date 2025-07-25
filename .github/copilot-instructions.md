# GitHub Copilot Instructions for Anonymous PC E-commerce

## Project Overview
This is a React-based e-commerce application for computer hardware sales called "Anonymous PC". The application features a cyberpunk-inspired design with purple (#7c3aed) and cyan (#05A2BC) color accents on a white background.

## Architecture & Technology Stack

### Core Technologies
- **React 18.2.0** - Main frontend framework with Create React App
- **Chakra UI** - Primary component library for consistent UI design
- **React Router DOM 6.22.2** - Client-side routing and navigation
- **Axios** - HTTP client for API communication
- **Formik + Yup** - Form handling and validation
- **Context API** - Global state management

### Key Dependencies
- **@chakra-ui/react**: UI component library
- **react-router-dom**: Routing solution
- **formik**: Form library
- **yup**: Schema validation
- **axios**: HTTP client
- **firebase**: Authentication and backend services
- **framer-motion**: Animation library
- **react-icons**: Icon library

## Project Structure

```
src/
├── components/
│   ├── Context/           # Global state management
│   ├── Routes/           # Page components
│   ├── Assets/
│   │   ├── Image/        # Static images
│   │   └── Styles/       # CSS modules
│   └── Hooks/            # Custom React hooks
├── utils/                # Utility functions and configurations
└── App.js               # Main application component
```

## Architecture Patterns

### Context-Based State Management
The application uses React Context API for global state management with four main contexts:

1. **ProductContext** (`src/components/Context/ProductContext.jsx`)
   - Manages product data, filtering, and pagination
   - Provides: `relevantProducts`, `builds`, `allProducts`, `filteredProducts`
   - Key functions: `fetchRelevantProducts()`, `fetchBuilds()`, `filterProducts()`

2. **CartContext** (`src/components/Context/CartContext.jsx`)
   - Manages shopping cart state
   - Simple state: `addCart` array for cart items

3. **FavoriteContext** (`src/components/Context/FavoriteContext.jsx`)
   - Manages user's favorite products
   - Similar pattern to CartContext

4. **ThemeContext** (`src/components/Context/ThemeContext.jsx`)
   - Manages light/dark theme switching
   - Provides theme colors and `toggleTheme()` function

### Component Organization
- **Route Components**: Located in `src/components/Routes/`
- **UI Components**: Located in `src/components/`
- **Custom Hooks**: Located in `src/components/Hooks/`
- **Styling**: CSS files in `src/components/Assets/Styles/`

## Coding Conventions

### Component Patterns
```jsx
// Functional components with hooks
export default function ComponentName(props) {
    const { context } = useContextHook();
    const [state, setState] = useState(initialValue);
    
    // Event handlers
    const handleEvent = () => {
        // Implementation
    };
    
    return (
        <Box className="component-container">
            {/* JSX content */}
        </Box>
    );
}
```

### Context Usage Pattern
```jsx
// Context provider setup in App.js
<ThemeProvider>
    <ProductProvider>
        <FavoriteProvider>
            <CartProvider>
                {/* App content */}
            </CartProvider>
        </FavoriteProvider>
    </ProductProvider>
</ThemeProvider>
```

### API Integration
- **Base Configuration**: `src/utils/axiosConfig.jsx`
- **API Endpoint**: Backend proxy configured to `https://anonymousbackend.onrender.com`
- **Standard Pattern**: Use async/await with try-catch for error handling

### Routing Structure
```jsx
// Main routes in App.js
<Routes>
    <Route path='/' element={<Inicio />} />
    <Route path='/productos' element={<Productos />} />
    <Route path='/productos/:category' element={<Productos />} />
    <Route path='/producto/:id' element={<DetailProduct />} />
    <Route path='/checkout' element={<Checkout />} />
    <Route path='/usuario/*' element={<ProtectedRoute><Usuario/></ProtectedRoute>} />
</Routes>
```

## Styling Guidelines

### Design System
- **Primary Purple**: `#7c3aed` - Used for main accents and highlights
- **Secondary Cyan**: `#05A2BC` - Used for secondary accents
- **Background**: White `#FFFFFF` with clean, modern appearance
- **Typography**: Clean, readable fonts with proper hierarchy

### CSS Organization
- Component-specific CSS files in `src/components/Assets/Styles/`
- Naming convention: `ComponentName.css`
- BEM-like class naming: `.component-container`, `.component-element`

### Responsive Design
```css
/* Mobile-first approach */
@media (max-width: 480px) { /* Mobile */ }
@media (max-width: 768px) { /* Tablet */ }
@media (max-width: 992px) { /* Desktop */ }
```

## Key Features & Implementation

### Product Search & Filtering
- **Location**: `Header.jsx` - Real-time search with dropdown preview
- **Pattern**: Filter products from ProductContext, navigate to product details
- **Implementation**: Uses `allProducts.filter()` with name matching

### Product Details
- **Route**: `/producto/:id`
- **Component**: `DetailProduct.jsx`
- **Pattern**: Extract ID from URL params, find product in context

### Cart Management
- **Storage**: localStorage with context synchronization
- **Pattern**: Add/remove items through CartContext, persist to localStorage

### Form Handling
- **Library**: Formik + Yup for validation
- **Pattern**: Consistent form structure with validation schemas
- **Components**: Login, Register, Checkout forms

## Development Workflow

### Component Development
1. Create functional component with proper naming
2. Import required hooks and contexts
3. Implement state management and event handlers
4. Add responsive styling in corresponding CSS file
5. Ensure proper error handling and loading states

### API Integration
1. Use configured Axios instance from `utils/axiosConfig.jsx`
2. Implement async functions with try-catch blocks
3. Update loading and error states appropriately
4. Handle authentication tokens when needed

### State Management
1. Use appropriate Context for global state
2. Implement custom hooks for complex logic
3. Follow established patterns for state updates
4. Ensure localStorage synchronization where needed

## Testing & Quality

### Code Quality Standards
- Use consistent naming conventions
- Implement proper error handling
- Add loading states for async operations
- Ensure responsive design compliance
- Follow established component patterns

### Performance Considerations
- Lazy load components where appropriate
- Optimize image assets
- Implement proper pagination for large datasets
- Use React.memo for expensive components

## Authentication & Security

### Authentication Flow
- Firebase integration for user authentication
- JWT token handling (commented out in axios config)
- Protected routes using `ProtectedRoute` component
- OAuth integration for Google login

### Security Patterns
- Validate user input with Yup schemas
- Sanitize data before API calls
- Implement proper error boundaries
- Use secure authentication patterns

## Common Patterns & Examples

### Adding a New Product Category
1. Update routing in `App.js`
2. Add category filter in `ProductContext`
3. Update navigation in `Header.jsx`
4. Ensure proper styling and responsive design

### Creating a New Form Component
```jsx
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    field: Yup.string().required('Required')
});

export default function FormComponent() {
    return (
        <Formik
            initialValues={{ field: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form>
                <Field name="field" />
            </Form>
        </Formik>
    );
}
```

### Adding Context Consumer
```jsx
import { useProducts } from '../Context/ProductContext';

export default function Component() {
    const { allProducts, loading, error } = useProducts();
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    
    return (
        <div>
            {allProducts.map(product => (
                <div key={product.id}>{product.name}</div>
            ))}
        </div>
    );
}
```

## Deployment & Environment

### Build Process
- Standard Create React App build process
- Environment variables for API configuration
- Static asset optimization
- Production build optimization

### Environment Configuration
- Development: Local development server
- Production: Backend proxy to `https://anonymousbackend.onrender.com`
- Environment variables managed through `.env` files

## Maintenance & Updates

### Adding New Features
1. Follow established architectural patterns
2. Maintain consistency with existing code style
3. Update relevant contexts and routing
4. Ensure responsive design implementation
5. Test across different screen sizes

### Code Reviews Focus Areas
- Context usage and state management
- Responsive design implementation
- Error handling and loading states
- API integration patterns
- Form validation and user input handling
- Component composition and reusability

This documentation should guide AI coding agents in understanding the project structure, following established patterns, and maintaining code consistency throughout the Anonymous PC e-commerce application.
