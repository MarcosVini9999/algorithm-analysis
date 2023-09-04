package algoritmos;

public class PesquisaBinaria {

	public static int PesquisaBinaria(int x, int v[], int e, int d) {
		int meio = (e + d) / 2;
		System.out.println("meio");
		System.out.println(meio);
		System.out.println("meio");
		if (v[meio] == x)
			return meio;
		if (e >= d)
			return -1;
		else if (v[meio] < x)
			return PesquisaBinaria(x, v, meio + 1, d);
		else
			return PesquisaBinaria(x, v, e, meio - 1);
	}

	public static void main(String[] args) {
		
		int vet[] = { 1, 2, 8, 10, 20, 40, 90, 99, 99, 100 };
		 System.out.println(PesquisaBinaria(100, vet, 0, 10));
	}
}
