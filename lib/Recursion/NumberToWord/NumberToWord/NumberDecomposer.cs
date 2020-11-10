using System.Collections.Generic;
using System.Linq;
using System;

namespace NumberToWord
{
    public static class NumberDecomposer
    {
        public static IEnumerable<List<T>> Partition<T>(this IList<T> source, Int32 size)
        {
            for (int i = 0; i < Math.Ceiling(source.Count / (Double)size); i++)
                yield return new List<T>(source.Skip(size * i).Take(size));
        }

        #region Dictionary
        private static Dictionary<int, string> _suffixes = new Dictionary<int, string>
        {
            { 3, " thousand " },
            { 6, " million " },
            { 9, " billion " }
        };

        private static Dictionary<int, string> _ones = new Dictionary<int, string>
        {
            { 0, string.Empty },
            { 1, "one" },
            { 2, "two" },
            { 3, "three" },
            { 4, "four" },
            { 5, "five" },
            { 6, "six" },
            { 7, "seven" },
            { 8, "eight" },
            { 9, "nine" }
        };

        private static Dictionary<int, string> _tens = new Dictionary<int, string>
        {
            { 11, "eleven" },
            { 12, "twelve" },
            { 13, "thirteen" },
            { 14, "fourteen" },
            { 15, "fifteen" },
            { 16, "sixteen" },
            { 17, "seventeen" },
            { 18, "eighteen" },
            { 19, "nineteen" },
            { 10, "ten" },
            { 0, string.Empty },
            { 2, "twenty" },
            { 3, "thirty" },
            { 4, "fourty" },
            { 5, "fifty" },
            { 6, "sixty" },
            { 7, "seventy" },
            { 8, "eighty" },
            { 9, "ninety" }
        };
        #endregion

        public static string ConvertToText(int value)
        {
            return ConvertToText(Decompose(value));
        }
           
        private static string ConvertToText(int[] parts)
        {
            var value = string.Empty;
            var groupCount = 0;

            foreach(var group in parts.Partition(3).ToArray())
            {
                var newValue = ConvertGroupToText(group, group.Count - 1);
                var suffix = _suffixes.ContainsKey(groupCount) && !string.IsNullOrEmpty(newValue) ? _suffixes[groupCount] : " ";
                value = (newValue + suffix + value).Trim();
                groupCount += 3;
            }

            return value;
        }

        private static string GetSuffix(int i, string value)
        {
            if ((i + 1) % 3 == 0 && !string.IsNullOrEmpty(value))
                return " hundred ";

            return " ";
        }

        private static string ConvertGroupToText(IList<int> parts, int partIndex)
        {
            if (partIndex < 0)
                return string.Empty;
            
            var partString = string.Empty;
            var suffix = partIndex == 2  && parts[partIndex] != 0  ? " hundred " : " ";

            if (TeenValue(parts, partIndex))
            {
                var value = parts[partIndex] * 10 + parts[partIndex - 1];
                partString = _tens[value];
                return (partString + suffix + ConvertGroupToText(parts, partIndex - 2)).Trim();
            }
            else
            {
                partString = (partIndex - 1) % 3 == 0 ? _tens[parts[partIndex]] : _ones[parts[partIndex]];
                return (partString + suffix + ConvertGroupToText(parts, partIndex - 1)).Trim();
            }
        }

        private static bool TeenValue(IList<int> parts, int partIndex)
        {
            return ((partIndex - 1) % 3 == 0 && parts[partIndex] == 1);
        }

        public static int[] Decompose(int value)
        {
            var items = new List<int>();

            while (value > 9)
            {
                items.Add(value % 10);
                value /= 10;
            }

            items.Add(value);

            return items.ToArray();
        }
    }
}
