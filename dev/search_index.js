var documenterSearchIndex = {"docs":
[{"location":"functions/#Functions","page":"Functions","title":"Functions","text":"","category":"section"},{"location":"functions/#Chapter-1:-Introduction","page":"Functions","title":"Chapter 1: Introduction","text":"","category":"section"},{"location":"functions/","page":"Functions","title":"Functions","text":"Modules = [FNC]\nPages   = [\"chapter01.jl\"]","category":"page"},{"location":"functions/#FundamentalsNumericalComputation.horner-Tuple{Any, Any}","page":"Functions","title":"FundamentalsNumericalComputation.horner","text":"horner(c,x)\n\nEvaluate a polynomial whose coefficients are given in ascending order in c, at the point x, using Horner's rule.\n\n\n\n\n\n","category":"method"},{"location":"functions/#Chapter-2:-Square-linear-systems","page":"Functions","title":"Chapter 2: Square linear systems","text":"","category":"section"},{"location":"functions/","page":"Functions","title":"Functions","text":"Modules = [FNC]\nPages   = [\"chapter02.jl\"]","category":"page"},{"location":"functions/#FundamentalsNumericalComputation.backsub-Tuple{Any, Any}","page":"Functions","title":"FundamentalsNumericalComputation.backsub","text":"backsub(U,b)\n\nSolve the upper-triangular linear system with matrix U and right-hand side vector b.\n\n\n\n\n\n","category":"method"},{"location":"functions/#FundamentalsNumericalComputation.forwardsub-Tuple{Any, Any}","page":"Functions","title":"FundamentalsNumericalComputation.forwardsub","text":"forwardsub(L,b)\n\nSolve the lower-triangular linear system with matrix L and right-hand side vector b.\n\n\n\n\n\n","category":"method"},{"location":"functions/#FundamentalsNumericalComputation.lufact-Tuple{Any}","page":"Functions","title":"FundamentalsNumericalComputation.lufact","text":"lufact(A)\n\nCompute the LU factorization of square matrix A, returning the factors.\n\n\n\n\n\n","category":"method"},{"location":"functions/#Chapter-3:-Overdetermined-linear-systems","page":"Functions","title":"Chapter 3: Overdetermined linear systems","text":"","category":"section"},{"location":"functions/","page":"Functions","title":"Functions","text":"Modules = [FNC]\nPages   = [\"chapter03.jl\"]","category":"page"},{"location":"functions/#FundamentalsNumericalComputation.lsnormal-Tuple{Any, Any}","page":"Functions","title":"FundamentalsNumericalComputation.lsnormal","text":"lsnormal(A,b)\n\nSolve a linear least squares problem by the normal equations. Returns the minimizer of ||b-Ax||.\n\n\n\n\n\n","category":"method"},{"location":"functions/#FundamentalsNumericalComputation.lsqrfact-Tuple{Any, Any}","page":"Functions","title":"FundamentalsNumericalComputation.lsqrfact","text":"lsqrfact(A,b)\n\nSolve a linear least squares problem by QR factorization. Returns the minimizer of ||b-Ax||.\n\n\n\n\n\n","category":"method"},{"location":"functions/#FundamentalsNumericalComputation.qrfact-Tuple{Any}","page":"Functions","title":"FundamentalsNumericalComputation.qrfact","text":"qrfact(A)\n\nQR factorization by Householder reflections. Returns Q and R.\n\n\n\n\n\n","category":"method"},{"location":"functions/#Chapter-4:-Roots-of-nonlinear-equations","page":"Functions","title":"Chapter 4: Roots of nonlinear equations","text":"","category":"section"},{"location":"functions/","page":"Functions","title":"Functions","text":"Modules = [FNC]\nPages   = [\"chapter04.jl\"]","category":"page"},{"location":"functions/#FundamentalsNumericalComputation.fdjac-Tuple{Any, Any, Any}","page":"Functions","title":"FundamentalsNumericalComputation.fdjac","text":"fdjac(f,x₀,y₀)\n\nCompute a finite-difference approximation of the Jacobian matrix for f at x₀, where y₀=f(x₀) is given.\n\n\n\n\n\n","category":"method"},{"location":"functions/#FundamentalsNumericalComputation.levenberg-Tuple{Any, Any}","page":"Functions","title":"FundamentalsNumericalComputation.levenberg","text":"levenberg(f,x₁,tol[;maxiter,ftol,xtol])\n\nUse Levenberg's quasi-Newton iteration to find a root of the system f, starting from x₁, with tol as the stopping tolerance in both step size and residual norm. Returns the history of root estimates  as a vector of vectors.\n\nThe optional keyword parameters set the maximum number of iterations and the stopping tolerance for values of f and changes in x.\n\n\n\n\n\n","category":"method"},{"location":"functions/#FundamentalsNumericalComputation.newton-Tuple{Any, Any, Any}","page":"Functions","title":"FundamentalsNumericalComputation.newton","text":"newton(f,dfdx,x₁[;maxiter,ftol,xtol])\n\nUse Newton's method to find a root of f starting from x₁, where dfdx is the derivative of f. Returns a vector of root estimates.\n\nThe optional keyword parameters set the maximum number of iterations and the stopping tolerance for values of f and changes in x.\n\n\n\n\n\n","category":"method"},{"location":"functions/#FundamentalsNumericalComputation.newtonsys-Tuple{Any, Any, Any}","page":"Functions","title":"FundamentalsNumericalComputation.newtonsys","text":"newtonsys(f,jac,x₁[;maxiter,ftol,xtol])\n\nUse Newton's method to find a root of a system of equations, starting from x₁. The functions f and `jac should return the residual vector and the Jacobian matrix, respectively. Returns the history of root estimates as a vector of vectors.\n\nThe optional keyword parameters set the maximum number of iterations and the stopping tolerance for values of f and changes in x.\n\n\n\n\n\n","category":"method"},{"location":"functions/#FundamentalsNumericalComputation.secant-Tuple{Any, Any, Any}","page":"Functions","title":"FundamentalsNumericalComputation.secant","text":"secant(f,x₁,x₂[;maxiter,ftol,xtol])\n\nUse the secant method to find a root of f starting from x₁ and x₂. Returns a vector of root estimates.\n\nThe optional keyword parameters set the maximum number of iterations and the stopping tolerance for values of f and changes in x.\n\n\n\n\n\n","category":"method"},{"location":"functions/#Chapter-5:-Piecewise-interpolation","page":"Functions","title":"Chapter 5: Piecewise interpolation","text":"","category":"section"},{"location":"functions/","page":"Functions","title":"Functions","text":"Modules = [FNC]\nPages   = [\"chapter05.jl\"]","category":"page"},{"location":"functions/#FundamentalsNumericalComputation.fdweights-Tuple{Any, Any}","page":"Functions","title":"FundamentalsNumericalComputation.fdweights","text":"fdweights(t,m)\n\nCompute weights for the mth derivative of a function at zero using values at the nodes in vector t.\n\n\n\n\n\n","category":"method"},{"location":"functions/#FundamentalsNumericalComputation.intadapt-NTuple{4, Any}","page":"Functions","title":"FundamentalsNumericalComputation.intadapt","text":"intadapt(f,a,b,tol)\n\nAdaptively integrate f over [a,b] to within target error  tolerance tol. Returns the estimate and a vector of evaluation  nodes.\n\n\n\n\n\n","category":"method"},{"location":"functions/#FundamentalsNumericalComputation.plinterp-Tuple{Any, Any}","page":"Functions","title":"FundamentalsNumericalComputation.plinterp","text":"plinterp(t,y)\n\nConstruct a piecewise linear interpolating function for data values in y given at nodes in t.\n\n\n\n\n\n","category":"method"},{"location":"functions/#FundamentalsNumericalComputation.spinterp-Tuple{Any, Any}","page":"Functions","title":"FundamentalsNumericalComputation.spinterp","text":"spinterp(t,y)\n\nConstruct a cubic not-a-knot spline interpolating function for data values in y given at nodes in t.\n\n\n\n\n\n","category":"method"},{"location":"functions/#FundamentalsNumericalComputation.trapezoid-NTuple{4, Any}","page":"Functions","title":"FundamentalsNumericalComputation.trapezoid","text":"trapezoid(f,a,b,n)\n\nApply the trapezoid integration formula for integrand f over interval [a,b], broken up into n equal pieces. Returns the estimate, a vector of nodes, and a vector of integrand values at the nodes.\n\n\n\n\n\n","category":"method"},{"location":"functions/#Chapter-6:-Initial-value-problems-for-ODEs","page":"Functions","title":"Chapter 6: Initial-value problems for ODEs","text":"","category":"section"},{"location":"functions/","page":"Functions","title":"Functions","text":"Modules = [FNC]\nPages   = [\"chapter06.jl\"]","category":"page"},{"location":"functions/#FundamentalsNumericalComputation.ab4-Tuple{Any, Any}","page":"Functions","title":"FundamentalsNumericalComputation.ab4","text":"ab4(ivp,n)\n\nApply the Adams-Bashforth 4th order method to solve the given IVP using n time steps. Returns a vector of times and a vector of solution values.\n\n\n\n\n\n","category":"method"},{"location":"functions/#FundamentalsNumericalComputation.am2-Tuple{Any, Any}","page":"Functions","title":"FundamentalsNumericalComputation.am2","text":"am2(ivp,n)\n\nApply the Adams-Moulton 2nd order method to solve given IVP using n time steps. Returns a vector of times and a vector of solution values.\n\n\n\n\n\n","category":"method"},{"location":"functions/#FundamentalsNumericalComputation.euler-Tuple{Any, Any}","page":"Functions","title":"FundamentalsNumericalComputation.euler","text":"euler(ivp,n)\n\nApply Euler's method to solve the given IVP using n time steps. Returns a vector of times and a vector of solution values.\n\n\n\n\n\n","category":"method"},{"location":"functions/#FundamentalsNumericalComputation.ie2-Tuple{Any, Any}","page":"Functions","title":"FundamentalsNumericalComputation.ie2","text":"ie2(ivp,n)\n\nApply the Improved Euler method to solve the given IVP using n time steps. Returns a vector of times and a vector of solution values.\n\n\n\n\n\n","category":"method"},{"location":"functions/#FundamentalsNumericalComputation.rk23-Tuple{Any, Any}","page":"Functions","title":"FundamentalsNumericalComputation.rk23","text":"rk23(ivp,tol)\n\nApply an adaptive embedded RK formula pair to solve given IVP with estimated error tol. Returns a vector of times and a vector of solution values.\n\n\n\n\n\n","category":"method"},{"location":"functions/#FundamentalsNumericalComputation.rk4-Tuple{Any, Any}","page":"Functions","title":"FundamentalsNumericalComputation.rk4","text":"rk4(ivp,n)\n\nApply the common Runge-Kutta 4th order method to solve the given  IVP using n time steps. Returns a vector of times and a vector of solution values.\n\n\n\n\n\n","category":"method"},{"location":"functions/#Chapter-7:-Matrix-analysis","page":"Functions","title":"Chapter 7: Matrix analysis","text":"","category":"section"},{"location":"functions/","page":"Functions","title":"Functions","text":"Modules = [FNC]\nPages   = [\"chapter07.jl\"]","category":"page"},{"location":"functions/#Chapter-8:-Krylov-methods-in-linear-algebra","page":"Functions","title":"Chapter 8: Krylov methods in linear algebra","text":"","category":"section"},{"location":"functions/","page":"Functions","title":"Functions","text":"Modules = [FNC]\nPages   = [\"chapter08.jl\"]","category":"page"},{"location":"functions/#FundamentalsNumericalComputation.arnoldi-Tuple{Any, Any, Any}","page":"Functions","title":"FundamentalsNumericalComputation.arnoldi","text":"arnoldi(A,u,m)\n\nPerform the Arnoldi iteration for A starting with vector u, out to the Krylov subspace of degree m. Returns the orthonormal basis (m+1 columns) and the upper Hessenberg H of size m+1 by m.\n\n\n\n\n\n","category":"method"},{"location":"functions/#FundamentalsNumericalComputation.gmres-Tuple{Any, Any, Any}","page":"Functions","title":"FundamentalsNumericalComputation.gmres","text":"gmres(A,b,m)\n\nDo m iterations of GMRES for the linear system A*x=b. Returns the final solution estimate x and a vector with the history of residual norms. (This function is for demo only, not practical use.)\n\n\n\n\n\n","category":"method"},{"location":"functions/#FundamentalsNumericalComputation.inviter-Tuple{Any, Any, Any}","page":"Functions","title":"FundamentalsNumericalComputation.inviter","text":"inviter(A,s,numiter)\n\nPerform numiter inverse iterations with the matrix A and shift s, starting from a random vector. Returns a vector of eigenvalue estimates and the final eigenvector approximation.\n\n\n\n\n\n","category":"method"},{"location":"functions/#FundamentalsNumericalComputation.poisson-Tuple{Any}","page":"Functions","title":"FundamentalsNumericalComputation.poisson","text":"poisson(n)\n\nConstruct the finite difference Laplacian matrix for an n by n  interior lattice.\n\n\n\n\n\n","category":"method"},{"location":"functions/#FundamentalsNumericalComputation.poweriter-Tuple{Any, Any}","page":"Functions","title":"FundamentalsNumericalComputation.poweriter","text":"poweriter(A,numiter)\n\nPerform numiter power iterations with the matrix A, starting from a random vector. Returns a vector of eigenvalue estimates and the final eigenvector approximation.\n\n\n\n\n\n","category":"method"},{"location":"functions/#FundamentalsNumericalComputation.sprandsym-Tuple{Any, Any, Vector{T} where T}","page":"Functions","title":"FundamentalsNumericalComputation.sprandsym","text":"sprandsym(n,density,λ)\nsprandsym(n,density,rcond)\n\nConstruct a randomized n by n symmetric sparse matrix of approximate  density density. For vector λ, the matrix has eigenvalues as  prescribed by λ. For scalar rcond, the matrix has condition number  equal to 1/rcond.\n\n\n\n\n\n","category":"method"},{"location":"functions/#Chapter-9:-Global-function-approximation","page":"Functions","title":"Chapter 9: Global function approximation","text":"","category":"section"},{"location":"functions/","page":"Functions","title":"Functions","text":"Modules = [FNC]\nPages   = [\"chapter09.jl\"]","category":"page"},{"location":"functions/#FundamentalsNumericalComputation.ccint-Tuple{Any, Any}","page":"Functions","title":"FundamentalsNumericalComputation.ccint","text":"ccint(f,n)\n\nPerform Clenshaw-Curtis integration for the function f on n+1 nodes in [-1,1]. Returns the integral estimate and a vector of the  nodes used. Note: n must be even.\n\n\n\n\n\n","category":"method"},{"location":"functions/#FundamentalsNumericalComputation.glint-Tuple{Any, Any}","page":"Functions","title":"FundamentalsNumericalComputation.glint","text":"glint(f,n)\n\nPerform Gauss-Legendre integration for the function f on n nodes in (-1,1). Returns the integral estimate and a vector of the nodes used.\n\n\n\n\n\n","category":"method"},{"location":"functions/#FundamentalsNumericalComputation.intde-Tuple{Any, Any, Any}","page":"Functions","title":"FundamentalsNumericalComputation.intde","text":"intde(f,h,M)\n\nPerform doubly-exponential integration of function f over (-Inf,Inf), using discretization size h and truncation point M. Returns the integral estimate and a vector of the nodes used.\n\n\n\n\n\n","category":"method"},{"location":"functions/#FundamentalsNumericalComputation.intsing-Tuple{Any, Any, Any}","page":"Functions","title":"FundamentalsNumericalComputation.intsing","text":"intsing(f,h,δ)\n\nIntegrate function f (possibly singular at 1 and -1) over [-1+δ,1-δ] using discretization size h. Returns the integral estimate and a vector of the nodes used.\n\n\n\n\n\n","category":"method"},{"location":"functions/#FundamentalsNumericalComputation.polyinterp-Tuple{Any, Any}","page":"Functions","title":"FundamentalsNumericalComputation.polyinterp","text":"polyinterp(t,y)\n\nConstruct a callable polynomial interpolant through the points in vectors t,y using the barycentric interpolation formula.\n\n\n\n\n\n","category":"method"},{"location":"functions/#FundamentalsNumericalComputation.triginterp-Tuple{Any, Any}","page":"Functions","title":"FundamentalsNumericalComputation.triginterp","text":"triginterp(t,y)\n\nConstruct the trigonometric interpolant for the points defined by  vectors t and y.\n\n\n\n\n\n","category":"method"},{"location":"functions/#Chapter-10:-Boundary-value-problems","page":"Functions","title":"Chapter 10: Boundary-value problems","text":"","category":"section"},{"location":"functions/","page":"Functions","title":"Functions","text":"Modules = [FNC]\nPages   = [\"chapter10.jl\"]","category":"page"},{"location":"functions/#FundamentalsNumericalComputation.bvp-NTuple{7, Any}","page":"Functions","title":"FundamentalsNumericalComputation.bvp","text":"bvp(ϕ,xspan,lval,lder,rval,rder,init)\n\nUse finite differences to solve a two-point boundary value problem. The ODE is u'' = ϕ(x,u,u') for x in xspan. Specify a function value or derivative at the left endpoint using lval and lder, respectively, and similarly for the right endpoint  using rval and rder. (Use an empty array to denote an unknown quantity.) The value init is an initial guess for whichever value is missing at the left endpoint.\n\nReturns vectors for the nodes and the values of u.\n\n\n\n\n\n","category":"method"},{"location":"functions/#FundamentalsNumericalComputation.bvplin-NTuple{7, Any}","page":"Functions","title":"FundamentalsNumericalComputation.bvplin","text":"bvplin(p,q,r,xspan,lval,rval,n)\n\nUse finite differences to solve a linear bopundary value problem. The ODE is u''+p(x)u'+q(x)u = r(x) on the interval xspan, with endpoint function values given as lval and rval. There will be n+1 equally spaced nodes, including the endpoints.\n\nReturns vectors of the nodes and the solution values.\n\n\n\n\n\n","category":"method"},{"location":"functions/#FundamentalsNumericalComputation.diffcheb-Tuple{Any, Any}","page":"Functions","title":"FundamentalsNumericalComputation.diffcheb","text":"diffcheb(n,xspan)\n\nCompute Chebyshev differentiation matrices on n+1 points in the interval xspan. Returns a vector of nodes and the matrices for the first and second derivatives.\n\n\n\n\n\n","category":"method"},{"location":"functions/#FundamentalsNumericalComputation.diffmat2-Tuple{Any, Any}","page":"Functions","title":"FundamentalsNumericalComputation.diffmat2","text":"diffmat2(n,xspan)\n\nCompute 2nd-order-accurate differentiation matrices on n+1 points in the interval xspan. Returns a vector of nodes and the matrices for the first and second derivatives.\n\n\n\n\n\n","category":"method"},{"location":"functions/#FundamentalsNumericalComputation.fem-NTuple{6, Any}","page":"Functions","title":"FundamentalsNumericalComputation.fem","text":"fem(c,s,f,a,b,n)\n\nUse a piecewise linear finite element method to solve a two-point boundary value problem. The ODE is (c(x)u')' + s(x)u = f(x) on the interval [a,b], and the boundary values are zero. The discretization uses n equal subintervals.\n\nReturn vectors for the nodes and the values of u.\n\n\n\n\n\n","category":"method"},{"location":"functions/#FundamentalsNumericalComputation.shoot-NTuple{7, Any}","page":"Functions","title":"FundamentalsNumericalComputation.shoot","text":"shoot(ϕ,xspan,lval,lder,rval,rder,init)\n\nUse the shooting method to solve a two-point boundary value problem. The ODE is u'' = ϕ(x,u,u') for x in xspan. Specify a function value or derivative at the left endpoint using lval and lder, respectively, and similarly for the right endpoint  using rval and rder. (Use an empty array to denote an unknown quantity.) The value init is an initial guess for whichever value is missing at the left endpoint.\n\nReturns vectors for the nodes, the values of u, and the values of u'.\n\n\n\n\n\n","category":"method"},{"location":"functions/#Chapter-11:-Diffusion-equations","page":"Functions","title":"Chapter 11: Diffusion equations","text":"","category":"section"},{"location":"functions/","page":"Functions","title":"Functions","text":"Modules = [FNC]\nPages   = [\"chapter11.jl\"]","category":"page"},{"location":"functions/#FundamentalsNumericalComputation.diffper-Tuple{Any, Any}","page":"Functions","title":"FundamentalsNumericalComputation.diffper","text":"diffper(n,xspan)\n\nConstruct 2nd-order differentiation matrices for functions with periodic end conditions, using n unique nodes in the interval xspan. Returns a vector of nodes and the matrices for the first and second derivatives.\n\n\n\n\n\n","category":"method"},{"location":"functions/#Chapter-12:-Advection-equations","page":"Functions","title":"Chapter 12: Advection equations","text":"","category":"section"},{"location":"functions/","page":"Functions","title":"Functions","text":"Modules = [FNC]\nPages   = [\"chapter12.jl\"]","category":"page"},{"location":"functions/#Chapter-13:-Two-dimensional-problems","page":"Functions","title":"Chapter 13: Two-dimensional problems","text":"","category":"section"},{"location":"functions/","page":"Functions","title":"Functions","text":"Modules = [FNC]\nPages   = [\"chapter13.jl\"]","category":"page"},{"location":"functions/#FundamentalsNumericalComputation.ndgrid-Tuple","page":"Functions","title":"FundamentalsNumericalComputation.ndgrid","text":"ndgrid(x,y,...)\n\nGiven d vector inputs, returns d matrices representing the coordinate functions on the tensor product grid.\n\n\n\n\n\n","category":"method"},{"location":"functions/#FundamentalsNumericalComputation.poissonfd-NTuple{6, Any}","page":"Functions","title":"FundamentalsNumericalComputation.poissonfd","text":"poissonfd(f,g,m,xspan,n,yspan)\n\nSolve Poisson's equation on a rectangle by finite differences. Function f is the forcing function and function g gives the Dirichlet boundary condition. The rectangle is the tensor product of intervals xspan and yspan,  and the discretization uses m+1 and n+1 points in the two coordinates.\n\nReturns matrices of the grid solution values and the coordinate functions.\n\n\n\n\n\n","category":"method"},{"location":"functions/#FundamentalsNumericalComputation.rectdisc-NTuple{4, Any}","page":"Functions","title":"FundamentalsNumericalComputation.rectdisc","text":"rectdisc(m,xspan,n,yspan)\n\nConstruct matrices and helpers for finite-difference discretization of a rectangle that is the tensor product of intervals xspan and yspan, using m+1 and n+1 points in the two coordinates.\n\n\n\n\n\n","category":"method"},{"location":"#Fundamentals-of-Numerical-Computation","page":"Fundamentals of Numerical Computation","title":"Fundamentals of Numerical Computation","text":"","category":"section"},{"location":"","page":"Fundamentals of Numerical Computation","title":"Fundamentals of Numerical Computation","text":"These are the Julia codes from the book Fundamentals of Numerical Computation by T. A. Driscoll and R. J. Braun.","category":"page"},{"location":"#Installation","page":"Fundamentals of Numerical Computation","title":"Installation","text":"","category":"section"},{"location":"","page":"Fundamentals of Numerical Computation","title":"Fundamentals of Numerical Computation","text":"Install Julia. Any of the available methods should be fine. The Julia Pro version comes with an integrated editor and many preinstalled packages, and it might be the best choice for those not comfortable with their command line shell.\nStart Julia on your machine. Look for the julia> prompt.\nAt the prompt type the ] character. This will turn the prompt a different color, indicating that you can give commands to the package manager.\nAt the newly colored prompt, type\nadd https://github.com/fncbook/FundamentalsNumericalComputation.jl\nThe process will take several minutes.\nHit the backspace (delete on Mac) key to go back to the main Julia prompt. Steps 3-5 should only need to be done once per installation.","category":"page"},{"location":"#Usage","page":"Fundamentals of Numerical Computation","title":"Usage","text":"","category":"section"},{"location":"","page":"Fundamentals of Numerical Computation","title":"Fundamentals of Numerical Computation","text":"In order to use the functions, in each new Julia session you must enter","category":"page"},{"location":"","page":"Fundamentals of Numerical Computation","title":"Fundamentals of Numerical Computation","text":"using FundamentalsNumericalComputation","category":"page"},{"location":"","page":"Fundamentals of Numerical Computation","title":"Fundamentals of Numerical Computation","text":"After this completes, all the text's functions can be accessed with the prefix FNC. E.g., FNC.lufact, FNC.rk23, etc.","category":"page"}]
}
