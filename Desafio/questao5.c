            string novaStr=string.Empty;
            string strOriginal;
            int i;

            strOriginal = "TesteInverter";

            for (i = strOriginal.Length-1; i >=0; i--)
            {
                novaStr += strOriginal[i];
            }

            Console.WriteLine(novaStr);
