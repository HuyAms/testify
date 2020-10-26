import React from 'react'
import {Form, Input, Button} from 'antd'

const ConfigurationForm = () => {
	const onFinish = values => {
		console.log('Success:', values)
	}

	const onFinishFailed = errorInfo => {
		console.log('Failed:', errorInfo)
	}

	const layout = {
		labelCol: {span: 8},
		wrapperCol: {span: 16},
	}

	const tailLayout = {
		wrapperCol: {offset: 8, span: 16},
	}

	return (
		<Form
			{...layout}
			name="basic"
			initialValues={{remember: true}}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
		>
			<Form.Item
				label="Size"
				name="size"
				rules={[{required: true, message: 'Please input your size!'}]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="Capacity"
				name="capacity"
				rules={[{required: true, message: 'Please input your capacity!'}]}
			>
				<Input />
			</Form.Item>

			<Form.Item {...tailLayout}>
				<Button type="primary" htmlType="submit">
					Calculate
				</Button>
			</Form.Item>
		</Form>
	)
}
export const Hello = () => <p>Hello</p>

export default ConfigurationForm
