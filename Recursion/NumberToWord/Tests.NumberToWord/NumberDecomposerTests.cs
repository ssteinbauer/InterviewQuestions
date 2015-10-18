using NumberToWord;
using Xunit;

namespace Tests.NumberToWord
{
    public class NumberDecomposerTests
    {
        public class ConvertToTextTests
        {
            [Theory]
            [InlineData(1, "one")]
            [InlineData(9, "nine")]
            public void Can_Turn_Single_Digit_Number_Into_Text(int value, string expectedValue)
            {
                var word = NumberDecomposer.ConvertToText(value);

                Assert.Equal(expectedValue, word);
            }

            [Theory]
            [InlineData(10, "ten")]
            [InlineData(11, "eleven")]
            [InlineData(19, "nineteen")]
            public void Can_Turn_Two_Digit_Number_Less_Than_Twenty_Into_Text(int value, string expectedValue)
            {
                var word = NumberDecomposer.ConvertToText(value);

                Assert.Equal(expectedValue, word);
            }

            [Theory]
            [InlineData(20, "twenty")]
            [InlineData(21, "twenty one")]
            [InlineData(99, "ninety nine")]
            public void Can_Turn_Two_Digit_Number_Greater_Than_Nineteen_Into_Text(int value, string expectedValue)
            {
                var word = NumberDecomposer.ConvertToText(value);

                Assert.Equal(expectedValue, word);
            }

            [Theory]
            [InlineData(100, "one hundred")]
            [InlineData(101, "one hundred one")]
            [InlineData(115, "one hundred fifteen")]
            [InlineData(120, "one hundred twenty")]
            [InlineData(999, "nine hundred ninety nine")]
            public void Can_Turn_Three_Digit_Number_Greater_Into_Text(int value, string expectedValue)
            {
                var word = NumberDecomposer.ConvertToText(value);

                Assert.Equal(expectedValue, word);
            }

            [Theory]
            [InlineData(1, "one")]
            [InlineData(100, "one hundred")]
            [InlineData(1000, "one thousand")]
            [InlineData(1010, "one thousand ten")]
            [InlineData(1100, "one thousand one hundred")]
            [InlineData(1110, "one thousand one hundred ten")]
            [InlineData(10000, "ten thousand")]
            [InlineData(20000, "twenty thousand")]
            [InlineData(100000, "one hundred thousand")]
            [InlineData(2000000, "two million")]
            [InlineData(300000001, "three hundred million one")]
            [InlineData(300000101, "three hundred million one hundred one")]
            [InlineData(9876543, "nine million eight hundred seventy six thousand five hundred fourty three")]
            public void Can_Determine_Suffixes(int value, string expectedValue)
            {
                var word = NumberDecomposer.ConvertToText(value);

                Assert.Equal(expectedValue, word);
            }
        }

        public class DecomposeTests
        {
            [Fact]
            public void Can_Break_Single_Digit_Number_Into_Base10_Parts()
            {
                var value = 2;

                var parts = NumberDecomposer.Decompose(value);

                Assert.Equal(new[] { 2 }, parts);
            }

            [Fact]
            public void Can_Break_Two_Digit_Number_Into_Base10_Parts()
            {
                var value = 21;

                var parts = NumberDecomposer.Decompose(value);

                Assert.Equal(new[] { 1, 2 }, parts);
            }

            [Fact]
            public void Can_Break_Three_Digit_Number_Into_Base10_Parts()
            {
                var value = 321;

                var parts = NumberDecomposer.Decompose(value);

                Assert.Equal(new[] { 1, 2, 3 }, parts);
            }

            [Fact]
            public void Can_Break_Four_Digit_Number_Into_Base10_Parts()
            {
                var value = 4321;

                var parts = NumberDecomposer.Decompose(value);

                Assert.Equal(new[] { 1, 2, 3, 4 }, parts);
            }
        }
    }
}
