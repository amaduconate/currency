import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

export default function Home() {
	return (
		<div className='flex  justify-center items-center min-h-screen'>
			<div>
				<Card className='w-[350px] '>
					<CardHeader>
						<CardTitle>AcTransfer</CardTitle>
						<CardDescription>
							Envio de dinheiro, Rapido e Eficaz
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form>
							<div className='flex flex-row'>
								<div className='flex flex-col space-y-1.5 relative mt-2 rounded-md shadow-sm'>
									<Label htmlFor='amount'>Montante</Label>
									<Input
										type='text'
										name='price'
										id='price'
										className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
										placeholder='Montante'
									/>
									<div className='absolute inset-y-0 right-0 flex items-center'>
										<label htmlFor='currency' className='sr-only'>
											Currency
										</label>
										<select
											id='currency'
											name='currency'
											className='h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm'
										>
											<option>USD</option>
											<option>CAD</option>
											<option>EUR</option>
										</select>
									</div>
								</div>
								<div className='flex flex-col space-y-1.5'>
									<Label htmlFor='framework'>De Onde</Label>
									<Select>
										<SelectTrigger id='framework'>
											<SelectValue placeholder='Select' />
										</SelectTrigger>
										<SelectContent position='popper'>
											<SelectItem value='Eur'>da Europa</SelectItem>
											<SelectItem value='Rub'>da Rússia</SelectItem>
											<SelectItem value='Xof'>da Guiné-Bissau</SelectItem>
										</SelectContent>
									</Select>
								</div>
								<div className='flex flex-col space-y-1.5'>
									<Label htmlFor='framework'>Para Onde</Label>
									<Select>
										<SelectTrigger id='framework'>
											<SelectValue placeholder='Select' />
										</SelectTrigger>
										<SelectContent position='popper'>
											<SelectItem value='Eur'>para a Europa</SelectItem>
											<SelectItem value='Rub'>para a Rússia</SelectItem>
											<SelectItem value='Xof'>para a Guiné-Bissau</SelectItem>
										</SelectContent>
									</Select>
								</div>
							</div>
						</form>
					</CardContent>
					<CardFooter className='flex justify-between'>
						<Button>Consultar</Button>
					</CardFooter>
				</Card>
			</div>
		</div>
	)
}
