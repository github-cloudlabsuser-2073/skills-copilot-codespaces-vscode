def calculator():
    """
    A simple calculator function that allows the user to perform basic arithmetic operations.

    The calculator provides the following operations:
    1. Addition
    2. Subtraction
    3. Multiplication
    4. Division
    5. Percentage calculation

    The user is prompted to select an operation and input the required numbers. The function
    validates user input and handles errors such as invalid choices, non-numeric input, and
    division by zero.

    Usage:
    - Run the function and follow the prompts to perform calculations.
    - The result of the selected operation is displayed after input is provided.

    Exceptions:
    - Handles ValueError for invalid numeric input.
    - Handles division by zero with an appropriate error message.
    """
    print("Select operation:")
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Divide")
    print("5. Percentage")

    while True:
        try:
            choice = int(input("Enter choice (1/2/3/4/5): "))
            if choice not in [1, 2, 3, 4, 5]:
                print("Invalid choice. Please select a valid operation.")
                continue
            break
        except ValueError:
            print("Invalid input. Please enter a numeric value.")

        num1 = float(input("Enter first number: "))
        if choice == 5:
            print(f"The result is: {num1 / 100}")
        else:
            num2 = float(input("Enter second number: "))

            if choice == 1:
                print(f"The result is: {num1 + num2}")
            elif choice == 2:
                print(f"The result is: {num1 - num2}")
            elif choice == 3:
                print(f"The result is: {num1 * num2}")
            elif choice == 4:
                if num2 == 0:
                    print("Error: Division by zero is not allowed.")
                else:
                    print(f"The result is: {num1 / num2}")
    except ValueError:
        print("Invalid input. Please enter numeric values.")

if __name__ == "__main__":
    calculator()