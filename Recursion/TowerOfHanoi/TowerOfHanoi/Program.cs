using System;
using System.Collections.Generic;

namespace TowerOfHanoi
{
    class Program
    {
        public class Pole
        {
            public string Name { get; private set; }

            private Stack<int> _myPole = new Stack<int>();

            public Pole(string name)
            {
                Name = name;
            }

            public void AddDisk(int item)
            {
                _myPole.Push(item);
            }

            public int RemoveDisk()
            {
                return _myPole.Pop();
            }

            public void Print()
            {
                Console.Write("{0}: ", Name);
                foreach (var item in _myPole)
                {
                    Console.Write("{0} ", item);
                }
                Console.WriteLine();
            }
        }

        static void Main(string[] args)
        {
            var fromPole = new Pole("from");
            var toPole = new Pole("to");
            var withPole = new Pole("with");
            fromPole.AddDisk(3);
            fromPole.AddDisk(2);
            fromPole.AddDisk(1);

            fromPole.Print();
            toPole.Print();
            withPole.Print();

            MoveTower(3, fromPole, toPole, withPole);

            Console.WriteLine();
            fromPole.Print();
            toPole.Print();
            withPole.Print();

            Console.WriteLine();
            Console.WriteLine("Tower Moved Successfully");
            Console.Read();
        }

        private static void MoveTower(int height, Pole fromPole, Pole toPole, Pole withPole)
        {
            if (height == 0) return;

            MoveTower(height - 1, fromPole, withPole, toPole);
            MoveDisk(fromPole, toPole);
            MoveTower(height - 1, withPole, toPole, fromPole);
        }
        
        private static void MoveDisk(Pole fromPole, Pole toPole)
        {
            Console.WriteLine("---");
            Console.WriteLine("From: " + fromPole.Name);
            Console.WriteLine("To: " + toPole.Name);
            Console.WriteLine("---");

            toPole.AddDisk(fromPole.RemoveDisk());
        }
    }
}
