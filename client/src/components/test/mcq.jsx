import { Card, CardHeader, CardContent, CardFooter } from "@/components/core/card"
import { RadioGroup, RadioGroupItem } from "@/components/core/radio-group"
import { Label } from "@/components/core/label"
import { Button } from "@/components/core/Button"

export default function Component() {
  return (
    <Card className="w-full max-w-lg">
      <CardHeader className="pb-0">
        <div>JavaScript Quiz</div>
        <p className="text-sm text-gray-500 dark:text-gray-400">You have 2 minutes to complete the quiz.</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <p className="font-semibold">What is the output of the following code?</p>
          <div>{`console.log(1 + "2" + "2" + 3);`}</div>
        </div>
        <div className="space-y-2">
          <RadioGroup defaultValue="a">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="a" id="mcq-a" name="mcq" />
              <Label htmlFor="mcq-a" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed">
                a) 1223
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="b" id="mcq-b" name="mcq" />
              <Label htmlFor="mcq-b" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed">
                b) 6
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="c" id="mcq-c" name="mcq" />
              <Label htmlFor="mcq-c" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed">
                c) 7
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="d" id="mcq-d" name="mcq" />
              <Label htmlFor="mcq-d" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed">
                d) 1223
              </Label>
            </div>
          </RadioGroup>
        </div>
      </CardContent>
      <CardFooter className="border-t p-4 justify-end">
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  )
}