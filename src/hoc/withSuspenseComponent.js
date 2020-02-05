import React, { Component } from 'react'
import { Suspense } from 'react'

export const withSuspense = Component => {
    return <Suspense fallback={<div>Загрузка...</div>}>
        <Component />
    </Suspense>
}

