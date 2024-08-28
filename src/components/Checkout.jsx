import { Box, Flex, Heading, Text, Button, FormControl, FormLabel, Input, RadioGroup, Radio, Select, Textarea, Divider, IconButton, Link } from "@chakra-ui/react";
import { FaCreditCard, FaDollarSign, FaLaptop, FaWallet } from "react-icons/fa";

export default function Component() {
  return (
    <Flex direction="column" minH="100vh">
      <Box as="main" flex="1" py={12}>
        <Flex maxW="container.xl" mx="auto" direction={{ base: "column", md: "row" }} gap={8}>
          <Box bg="card" p={6} rounded="lg" shadow="md">
            <Heading size="md" mb={4}>
              Order Summary
            </Heading>
            <Flex justify="space-between" mb={4}>
              <Box>
                <Text fontSize="lg" fontWeight="medium">
                  Item 1
                </Text>
                <Text color="gray.500">Laptop A</Text>
              </Box>
              <Text fontSize="lg" fontWeight="medium">
                $999.99
              </Text>
            </Flex>
            <Flex justify="space-between" mb={4}>
              <Box>
                <Text fontSize="lg" fontWeight="medium">
                  Item 2
                </Text>
                <Text color="gray.500">Mouse B</Text>
              </Box>
              <Text fontSize="lg" fontWeight="medium">
                $49.99
              </Text>
            </Flex>
            <Divider my={4} />
            <Flex justify="space-between">
              <Text fontSize="lg" fontWeight="medium">
                Subtotal
              </Text>
              <Text fontSize="lg" fontWeight="medium">
                $1,049.98
              </Text>
            </Flex>
            <Flex justify="space-between">
              <Text fontSize="lg" fontWeight="medium">
                Shipping
              </Text>
              <Text fontSize="lg" fontWeight="medium">
                $9.99
              </Text>
            </Flex>
            <Flex justify="space-between">
              <Text fontSize="lg" fontWeight="medium">
                Total
              </Text>
              <Text fontSize="lg" fontWeight="medium">
                $1,059.97
              </Text>
            </Flex>
          </Box>

          <Box bg="card" p={6} rounded="lg" shadow="md">
            <Heading size="md" mb={4}>
              Payment
            </Heading>
            <RadioGroup defaultValue="credit-card">
              <Flex direction="column" gap={2}>
                <Flex align="center" gap={2}>
                  <Radio value="credit-card" id="credit-card" />
                  <FormLabel htmlFor="credit-card" mb={0} cursor="pointer">
                    <Flex align="center" gap={2}>
                      <FaCreditCard />
                      <Text>Credit Card</Text>
                    </Flex>
                  </FormLabel>
                </Flex>
                <Flex align="center" gap={2}>
                  <Radio value="paypal" id="paypal" />
                  <FormLabel htmlFor="paypal" mb={0} cursor="pointer">
                    <Flex align="center" gap={2}>
                      <FaWallet />
                      <Text>PayPal</Text>
                    </Flex>
                  </FormLabel>
                </Flex>
                <Flex align="center" gap={2}>
                  <Radio value="apple-pay" id="apple-pay" />
                  <FormLabel htmlFor="apple-pay" mb={0} cursor="pointer">
                    <Flex align="center" gap={2}>
                      <FaDollarSign />
                      <Text>Apple Pay</Text>
                    </Flex>
                  </FormLabel>
                </Flex>
              </Flex>
            </RadioGroup>
            <Divider my={4} />
            <Flex direction="column" gap={4}>
              <FormControl>
                <FormLabel htmlFor="name">Name on Card</FormLabel>
                <Input id="name" placeholder="Enter your name" />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="card-number">Card Number</FormLabel>
                <Input id="card-number" placeholder="Enter your card number" />
              </FormControl>
              <Flex gap={4}>
                <FormControl>
                  <FormLabel htmlFor="expiration-month">Expiration Month</FormLabel>
                  <Select id="expiration-month" placeholder="Select month">
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="expiration-year">Expiration Year</FormLabel>
                  <Select id="expiration-year" placeholder="Select year">
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="cvc">CVC</FormLabel>
                  <Input id="cvc" placeholder="Enter CVC" />
                </FormControl>
              </Flex>
              <FormControl>
                <FormLabel htmlFor="address">Shipping Address</FormLabel>
                <Textarea id="address" placeholder="Enter your shipping address" />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="billing-address">Billing Address</FormLabel>
                <Textarea id="billing-address" placeholder="Enter your billing address" />
              </FormControl>
            </Flex>
            <Button colorScheme="teal" size="lg" mt={4} w="full">
              Place Order
            </Button>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
