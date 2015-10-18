using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NumberToWord
{
    class Program
    {
        static void Main(string[] args)
        {
            var value = 9876543;
            Console.WriteLine(value + ": \"" + NumberDecomposer.ConvertToText(value) + "\"");

            Console.Read();
        }
    }
}
