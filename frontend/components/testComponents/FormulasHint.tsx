import LatextTranform from "@/helpers/latexTransform"

const FormulaHints = () => {
    return (
            <div className="w-1/5 fixed top-35 left-4 h-fit bg-[#F0F4F8] shadow-md rounded-2xl p-4 overflow-y-auto max-h-[80vh]">
                <h1 className="text-center text-[18px] font-bold mb-4">Формули (AsciiMath)</h1>
                <div className="text-md space-y-2">
                    <div className="mb-2">
                    <div className="flex gap-2">
                        <p className="font-medium">Дріб:</p>
                        <LatextTranform content={"`a/b`"} /> 
                    </div>
                        <p>AsciiMath: <code className="bg-gray-200 px-1 rounded">`a/b`</code></p>
                    </div>

                    <div className="mb-2">
                    <div className="flex gap-2">
                        <p className="font-medium">Корінь квадратний:</p>
                        <LatextTranform content={"`sqrt(x)`"} />
                    </div>
                        <p>AsciiMath: <code className="bg-gray-200 px-1 rounded">`sqrt(x)`</code></p>
                    </div>

                    <div className="mb-2">
                        <div className="flex gap-2">
                        <p className="font-medium">Корінь n-го степеня:</p>
                        <LatextTranform content={"`root(n)(x)`"} />
                        </div>
                        <p>AsciiMath: <code className="bg-gray-200 px-1 rounded">`root(n)(x)`</code></p>
                    </div>

                    <div className="mb-2">
                        <div className="flex gap-2">
                        <p className="font-medium">Степінь:</p>
                        <LatextTranform content={"`x^2`"} />    
                    </div>   
                    <p>AsciiMath: <code className="bg-gray-200 px-1 rounded">`x^2`</code></p>
                    <div className="flex gap-2">
                        <LatextTranform content={"`e^x`"} />
                        <p>AsciiMath: <code className="bg-gray-200 px-1 rounded">`e^x`</code></p>
                    </div>
                    </div>

                    <div className="mb-2">
                    <div className="flex gap-2">
                        <p className="font-medium">Індекс:</p>
                        <LatextTranform content={"`x_1`"} />
                    </div>
                    <p>AsciiMath: <code className="bg-gray-200 px-1 rounded">`x_1`</code></p>
                    </div>

                    <div className="mb-2">
                        <div className="flex gap-2">
                        <p className="font-medium">Сума:</p>
                        <LatextTranform content={"`sum_(i=1)^n i^2`"} />
                        </div>
                        <p>AsciiMath: <code className="bg-gray-200 px-1 rounded">`sum_(i=1)^n i^2`</code></p>
                    </div>

                    <div className="mb-2">
                        <div className="flex gap-2">
                        <p className="font-medium">Інтеграл:</p>
                        <LatextTranform content={"`int_a^b x^2 dx`"} />
                        </div>
                        <p>AsciiMath: <code className="bg-gray-200 px-1 rounded">`int_a^b x^2 dx`</code></p>
                    </div>

                    <div className="mb-2">
                        <div className="flex gap-2">
                        <p className="font-medium">Множення:</p>
                        <LatextTranform content={"`a * b`"} />
                        </div>
                        <p>AsciiMath: <code className="bg-gray-200 px-1 rounded">`a * b`</code> або <code className="bg-gray-200 px-1 rounded">`a cdot b`</code></p>
                    </div>

                    <div className="mb-2">
                        <div className="flex gap-2">
                        <p className="font-medium">Нерівності:</p>
                        <LatextTranform content={"`a <= b`, `a >= b`, `a != b`"} />
                        </div>
                        <p>AsciiMath: <code className="bg-gray-200 px-1 rounded">`a {'<'}= b`</code>, <code className="bg-gray-200 px-1 rounded">`a {'>'}= b`</code>, <code className="bg-gray-200 px-1 rounded">`a != b`</code></p>
                    </div>

                    <div className="mb-2">
                    <div className="flex gap-2">
                        <p className="font-medium">Нескінченність:</p>
                        <LatextTranform content={"`oo`"} />
                    </div>
                        <p>AsciiMath: <code className="bg-gray-200 px-1 rounded">`oo`</code></p>
                    </div>

                    <div className="mb-2">
                        <div className="flex gap-2">
                        <p className="font-medium">Пі:</p>
                        <LatextTranform content={"`pi`"} />
                        </div>
                        <p>AsciiMath: <code className="bg-gray-200 px-1 rounded">`pi`</code></p>
                    </div>

                    <div>
                        <div className="flex gap-2">
                        <p className="font-medium">Грецькі літери (приклади):</p>
                        <LatextTranform content={"`alpha`, `beta`, `gamma`"} />
                        </div>   
                        <p>AsciiMath: <code className="bg-gray-200 px-1 rounded">`alpha`</code>, <code className="bg-gray-200 px-1 rounded">`beta`</code>, <code className="bg-gray-200 px-1 rounded">`gamma`</code> (повні назви)</p>
                    </div>

                </div>
            </div>
    )
}

export default FormulaHints