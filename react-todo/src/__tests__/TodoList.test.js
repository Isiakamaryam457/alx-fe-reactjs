import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from './TodoList';

// Test Suite for TodoList Component
describe('TodoList Component', () => {
  
  // TEST 1: Verify that TodoList renders correctly
  test('renders TodoList component correctly', () => {
    render(<TodoList />);
    
    // Check if the main heading is present
    expect(screen.getByText('My Todo List')).toBeInTheDocument();
    
    // Check if the AddTodoForm is rendered (by looking for its heading)
    expect(screen.getByText('Add New Todo')).toBeInTheDocument();
    
    // Check if the input field is present
    expect(screen.getByPlaceholderText('What needs to be done?')).toBeInTheDocument();
    
    // Check if the Add button is present
    expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument();
  });

  // TEST 2: Verify initial state - check that initial todos are displayed
  test('displays initial todos correctly', () => {
    render(<TodoList />);
    
    // Check if all initial todos are present
    expect(screen.getByText('Learn React basics')).toBeInTheDocument();
    expect(screen.getByText('Build a todo app')).toBeInTheDocument();
    expect(screen.getByText('Write tests')).toBeInTheDocument();
    expect(screen.getByText('Deploy project')).toBeInTheDocument();
  });

  // TEST 3: Verify initial completion states
  test('displays correct initial completion states', () => {
    render(<TodoList />);
    
    // Check that "Build a todo app" is marked as completed (has line-through)
    const completedTodo = screen.getByText('Build a todo app');
    expect(completedTodo).toHaveClass('line-through');
    
    // Check that other todos are not completed
    const incompleteTodo = screen.getByText('Learn React basics');
    expect(incompleteTodo).not.toHaveClass('line-through');
  });

  // TEST 4: Verify statistics display
  test('displays correct initial statistics', () => {
    render(<TodoList />);
    
    // Check if statistics are displayed correctly
    // Total: 4, Completed: 1, Remaining: 3
    expect(screen.getByText(/Total: 4/)).toBeInTheDocument();
    expect(screen.getByText(/Completed: 1/)).toBeInTheDocument();
    expect(screen.getByText(/Remaining: 3/)).toBeInTheDocument();
  });

  // TEST 5: Verify delete buttons are present
  test('renders delete buttons for each todo', () => {
    render(<TodoList />);
    
    // Should have 4 delete buttons (one for each initial todo)
    const deleteButtons = screen.getAllByText('Delete');
    expect(deleteButtons).toHaveLength(4);
  });

  // TEST 6: Verify toggle buttons are present
  test('renders toggle buttons for each todo', () => {
    render(<TodoList />);
    
    // Check for toggle buttons (they don't have text, so we check by role)
    const toggleButtons = screen.getAllByRole('button');
    
    // Should have buttons for: 4 toggles + 4 deletes + 1 add = 9 total buttons
    expect(toggleButtons.length).toBeGreaterThanOrEqual(9);
  });

  // TEST 7: Test component structure
  test('has correct component structure', () => {
    render(<TodoList />);
    
    // Check that there's a list element
    const todoList = screen.getByRole('list');
    expect(todoList).toBeInTheDocument();
    
    // Check that there are list items
    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems).toHaveLength(4); // 4 initial todos
  });

  // TEST 8: Test that Add button is initially disabled
  test('Add button is disabled when input is empty', () => {
    render(<TodoList />);
    
    const addButton = screen.getByRole('button', { name: /add/i });
    expect(addButton).toBeDisabled();
  });

  test('Add button enables when input has content', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('What needs to be done?');
    const addButton = screen.getByRole('button', { name: /add/i });
    
    // Type something in the input
    fireEvent.change(input, { target: { value: 'New todo item' } });
    
    // Button should now be enabled
    expect(addButton).not.toBeDisabled();
  });

  // TEST 10: Test adding a new todo
  test('adds a new todo when form is submitted', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('What needs to be done?');
    const addButton = screen.getByRole('button', { name: /add/i });
    
    // Add a new todo
    fireEvent.change(input, { target: { value: 'New test todo' } });
    fireEvent.click(addButton);
    
    // Check that the new todo appears
    expect(screen.getByText('New test todo')).toBeInTheDocument();
    
    // Check that statistics updated (Total should now be 5)
    expect(screen.getByText(/Total: 5/)).toBeInTheDocument();
    
    // Check that input is cleared
    expect(input.value).toBe('');
  });

});